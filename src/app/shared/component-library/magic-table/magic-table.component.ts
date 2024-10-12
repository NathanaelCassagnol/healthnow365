import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Output,
  QueryList,
  TemplateRef,
  ViewContainerRef,
  computed,
  effect,
  inject,
  input,
  signal,
} from '@angular/core';
import { CamelTitlePipe } from './camel-title.pipe';
import { PageEvent } from '@angular/material/paginator';
import {
  MagicTableBodyDirective,
  MagicTableEditDirective,
  MagicTableFooterDirective,
  MagicTableHeaderDirective,
} from './directives';
import {
  MagicTableColumnData,
  MagicTableData,
  MagicTableFilter,
  MagicTableFooterTypes,
  MagicTableSingleColumnData,
} from './magic-table.module';
import { DomPortalOutlet, TemplatePortal } from '@angular/cdk/portal';

const DEFAULT_WIDTH = 100;
const DEFAULT_TITLE_WIDTH = 50;

@Component({
  selector: 'magic-table',
  styleUrl: './magic-table.component.scss',
  templateUrl: './magic-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MagicTableComponent implements OnInit {
  // Basic stuff
  columns_input = input<string[]>([], { alias: 'columns' });
  possibleColumns = input<string[]>();
  columnData_input = input<MagicTableColumnData>({}, { alias: 'columnData' });
  title = input<string>('');
  showTitle = input<boolean | 'break'>(true);
  data = input<MagicTableData[]>([]);
  columns = signal<string[]>([]);
  // Classes
  baseClasses = 'striped-hover-table w-100 pad-cells mat-elevation-z10 ';
  inputClasses = computed(
    () => (this.scrollable() ? 'table-scrollable ' : '') + (this.breakable() ? 'breakable-table ' : '')
  );
  breakClasses = '';
  // Breaking
  break_input = input<boolean | '' | undefined>(undefined, { alias: 'break' });
  breakable = computed(() => this.break_input() !== undefined && this.break_input() !== false);
  flex: { [key: string]: string } = {};
  size: 'lg' | 'md' | 'sm' = 'lg';
  // Filtering
  filters_input = input<MagicTableFilter[]>([], { alias: 'filters' });
  filters = signal<MagicTableFilter[]>([]);
  isAddingFilter = signal(false);
  addFilter = signal<MagicTableFilter>({
    column: '',
    operation: '',
    value: '',
  });
  // Sorting
  sortBy_input = input<string | undefined>(undefined, { alias: 'sortBy' });
  sortBy = signal('');
  sortDir = signal<'asc' | 'desc' | 'none'>('none');
  // Searching
  searchable = computed(() => this.columns().find(c => this.colData()[c]?.search) != undefined);
  searchString = signal('');
  searchIsFocused = signal(false);
  // Grouping
  @Input() groupText: Function | undefined;
  group = computed(() => this.columns().find(c => this.colData()[c]?.group));
  toggleGroupVisibilityInput = input<string | undefined>(undefined, { alias: 'toggle-group-visibility' });
  groupVisibility = computed(() => this.toggleGroupVisibilityInput() !== undefined);
  // Scrolling
  scroll_input = input<boolean | '' | undefined>(undefined, { alias: 'scroll' });
  scrollable = computed(() => this.scroll_input() !== undefined && this.scroll_input() !== false);
  // Footer
  footer_input = input<MagicTableFooterTypes | undefined>(undefined, { alias: 'footer' });
  footerType = computed(() => this.footer_input() ?? 'none');
  footer_addons = input<any[] | undefined>(undefined, { alias: 'footer-addons' });
  // Pagination
  paginate_input = input<boolean | '' | undefined>(undefined, { alias: 'paginate' });
  isPrinting = signal(false);
  paginate = computed(
    () => !this.isPrinting() && this.paginate_input() !== undefined && this.paginate_input() !== false
  );
  pageSize = signal(5);
  pageNumber = signal(0);
  // Selectable
  select_input = input<boolean | '' | undefined>(undefined, { alias: 'select' });
  selectable = computed(() => this.select_input() !== undefined && this.select_input() !== false);
  select_count = 0;
  all_filtered_selected = false;
  some_filtered_selected = false;
  // Editable
  edit_input = input<boolean | '' | undefined>(undefined, { alias: 'edit' });
  editable = computed(() => this.edit_input() !== undefined && this.edit_input() !== false);
  delete_input = input<boolean | '' | undefined>(undefined, { alias: 'delete' });
  deletable = computed(() => this.delete_input() !== undefined && this.delete_input() !== false);
  edit_sorted_index = signal(-1);
  edit_row_copy: any = {};
  editing = computed(() => this.edit_sorted_index() >= 0);
  // Printable
  print_input = input<boolean | '' | undefined>(undefined, { alias: 'print' });
  printable = computed(() => this.print_input() !== undefined && this.print_input() !== false);
  // Loading
  loading_input = input<boolean | '' | undefined>(undefined, { alias: 'loading' });
  loading = computed(() => this.loading_input() !== undefined && this.loading_input() !== false);
  error_input = input<boolean | '' | undefined>(undefined, { alias: 'error' });
  error = computed(() => this.error_input() !== undefined && this.error_input() !== false);
  // Highlight
  @Input() highlight_row: Function | undefined;
  // Outputs
  @Output() rowClick = new EventEmitter<any>();
  @Output() checkbox = new EventEmitter<void>();
  @Output() onDelete = new EventEmitter<any>();
  @Output() onSave = new EventEmitter<{ old: any; new: any }>();
  @Input() printTitle = '';

  private elementRef = inject(ElementRef); // Used when updating size
  private cd = inject(ChangeDetectorRef);
  isArray = Array.isArray; // So I can use it in the template

  constructor() {
    effect(
      () => {
        if (this.columns_input() != undefined && this.columns_input().length > 0)
          this.columns.set(this.columns_input().slice());
        else if (this.data().length) this.columns.set(Object.keys(this.data()[0]).filter(k => k != 'id'));
      },
      { allowSignalWrites: true }
    );
    effect(
      () => {
        this.filters.set(this.filters_input().map(f => ({ ...f })));
      },
      { allowSignalWrites: true }
    );
    effect(() => this.updateSize());
    effect(() => this.refreshFilterCheck());
    effect(
      () => {
        if (this.sortBy_input()) {
          const parts = this.sortBy_input()?.split(':');
          if (parts?.length === 2) {
            this.sortBy.set(parts[0]);
            if (parts[1] === 'asc' || parts[1] === 'desc') this.sortDir.set(parts[1]);
            else this.sortDir.set('none');
          }
        }
      },
      { allowSignalWrites: true }
    );
    // Make sure pagination is in range
    effect(
      () => {
        if (this.firstItemViewed() > this.sortedData().length) {
          this.pageNumber.set(0);
        }
      },
      { allowSignalWrites: true }
    );
  }

  ngOnInit(): void {
    // Check for any warnings
    if (this.breakable() == true) {
      const allColumnDataKeys = [...new Set([...(this.possibleColumns() ?? []), ...this.columns()])];
      allColumnDataKeys.forEach(c => {
        let colData = this.columnData_input()[c];
        // prettier-ignore
        if (colData == undefined) console.warn ("MagicTable: Column properties for column "+c+" not found. It is recommended to add width and titleWidth when setting a table to breakable.");
        else if (colData.width == undefined) console.warn("MagicTable: width for "+c+" not set. It is recommended to set width for breakable tables.")
        else if (colData.titleWidth == undefined) console.warn("MagicTable: titleWidth for "+c+" not set. It is recommended to set titleWidth for breakable tables.")
      });
    }
  }

  filteredData = computed(() => {
    let functionalFilters = this.filters().map(v => {
      let valueFn = this.colData()[v.column]?.filterValue;
      if (valueFn == null) return { ...v };
      return {
        ...v,
        filterValue: valueFn,
      };
    });
    if (
      this.isAddingFilter() &&
      this.addFilter().column != '' &&
      this.addFilter().operation != '' &&
      (this.addFilter().value != '' || this.needsNoValue(this.addFilter().operation))
    ) {
      let valueFn = this.colData()[this.addFilter().column]?.filterValue;
      if (valueFn == null) functionalFilters.push(this.addFilter());
      else
        functionalFilters.push({
          ...this.addFilter(),
          filterValue: valueFn,
        });
    }
    let ret = this.data().slice();
    functionalFilters.map(this.filterToFn).forEach(f => (ret = ret.filter(f)));
    if (this.searchable() && this.searchString() != '') {
      // TODO: Make this handle dates better- Currently searching dates as e.g. 'Mon Mar 25 2024 08:55:44 GMT-0400 (Eastern Daylight Time)'
      // Needs to search array entries better as well
      ret = ret.filter(d =>
        Object.entries(d).find(
          e =>
            this.colData()[e[0]]?.search && e[1]?.toString().toLowerCase().includes(this.searchString().toLowerCase())
        )
      );
    }
    return ret;
  });

  sortedData = computed(() => {
    let ret = this.filteredData().slice();
    if (this.sortBy() && this.sortDir() != 'none') {
      const sortFunc = this.getSortFn(this.sortBy(), this.sortDir());
      ret = ret.sort((a, b) => sortFunc(a[this.sortBy()], b[this.sortBy()]));
    }
    if (this.group()) {
      // If we're grouping, we need to apply the grouping sort last
      let sortDir2: 'asc' | 'desc' | 'none' = 'asc';
      if (this.sortBy() === this.group()) sortDir2 = this.sortDir();
      else if (this.colData()[this.group()!]?.group === 'desc') sortDir2 = 'desc';
      const sortFunc2 = this.getSortFn(this.group()!, sortDir2);
      ret = ret.sort((a, b) => sortFunc2(a[this.group()!], b[this.group()!]));
    }
    return ret;
  });

  groupCounts = computed(() => {
    // How many entries do we have for each grouped section?
    if (!this.group()) return {};
    let ret: { [key: string]: number } = {};
    const allVals = [...new Set(this.filteredData().map(d => d[this.group()!]))];
    allVals.forEach(v => {
      ret[v] = this.filteredData().filter(d => d[this.group()!] == v).length;
    });
    return ret;
  });

  groupRows = computed(() => {
    // How many entries do we have for each grouped section?
    if (!this.group()) return {};
    let ret: { [key: string]: any[] } = {};
    const allVals = [...new Set(this.filteredData().map(d => d[this.group()!]))];
    allVals.forEach(v => {
      ret[v] = this.filteredData().filter(d => d[this.group()!] == v);
    });
    return ret;
  });

  toggleGroupVisibility(value: string) {
    let newFilter: MagicTableFilter = {
      column: this.group() ?? '',
      operation: 'isNot',
      value: value + '',
    };
    this.filters.set([...this.filters(), newFilter]);
  }

  paginatedData = computed(() => {
    if (this.paginate()) return this.sortedData().slice(this.firstItemViewed(), this.lastItemViewed() + 1);
    else return this.sortedData().slice();
  });
  firstItemViewed = computed(() =>
    this.paginate() ? this.pageNumber() * this.pageSize() : this.sortedData().length === 0 ? -1 : 0
  );
  lastItemViewed = computed(() =>
    this.paginate()
      ? Math.min((this.pageNumber() + 1) * this.pageSize() - 1, this.sortedData().length - 1)
      : this.sortedData().length - 1
  );

  colData = computed(() => {
    let pipe = new CamelTitlePipe();
    let ret: MagicTableColumnData = {};
    const allColumnDataKeys = [
      ...new Set([...(this.possibleColumns() ?? []), ...this.columns(), ...Object.keys(this.columnData_input())]),
    ];
    allColumnDataKeys.forEach(col => {
      ret[col] = {
        ...this.columnData_input()[col],
        title: this.columnData_input()[col]?.title ?? pipe.transform(col),
        width: this.columnData_input()[col]?.width ?? DEFAULT_WIDTH,
        titleWidth: this.columnData_input()[col]?.titleWidth ?? DEFAULT_TITLE_WIDTH,
      };
    });
    return ret;
  });
  filterColumns = computed(() => {
    const allColumnDataKeys = [
      ...new Set([...(this.possibleColumns() ?? []), ...this.columns(), ...Object.keys(this.columnData_input())]),
    ];
    return allColumnDataKeys.filter(c => this.colData()[c]?.filter);
  });
  columnMatches = computed(() => {
    let ret: { [key: string]: string[] } = {};
    Object.entries(this.colData())
      // .includes will work on strings and arrays
      .filter(([key, colVal]) => (colVal.filter ?? '').includes('matches'))
      .forEach(([key, colVal]) => {
        ret[key] = [
          ...new Set(
            this.data()
              .map(d => d[key])
              .filter(d => d != undefined && d != '')
          ),
        ];
        if (colVal?.sort) ret[key] = ret[key].sort(this.getSortFn(key, 'asc'));
      });
    return ret;
  });
  filteredColumns = computed(() =>
    Object.entries(this.colData())
      .filter(([key, colVal]) => (colVal.filter?.length ?? 0) > 0)
      .map(([key, colVal]) => key)
  );

  bodyMap: { [key: string]: TemplateRef<any> } = {};
  editMap: { [key: string]: TemplateRef<any> } = {};
  headerMap: { [key: string]: TemplateRef<any> } = {};
  footerMap: { [key: string]: TemplateRef<any> } = {};
  @ContentChildren(MagicTableHeaderDirective) set headerChildren(ref: QueryList<MagicTableHeaderDirective>) {
    this.headerMap = {};
    ref.forEach(i => (this.headerMap[i.MagicTableHeader] = i.template));
    this.cd.markForCheck();
  }
  @ContentChildren(MagicTableBodyDirective) set bodyChildren(ref: QueryList<MagicTableBodyDirective>) {
    this.bodyMap = {};
    ref.forEach(i => (this.bodyMap[i.MagicTableBody] = i.template));
    this.cd.markForCheck();
  }
  @ContentChildren(MagicTableEditDirective) set editChildren(ref: QueryList<MagicTableEditDirective>) {
    this.editMap = {};
    ref.forEach(i => (this.editMap[i.MagicTableEdit] = i.template));
    this.cd.markForCheck();
  }
  @ContentChildren(MagicTableFooterDirective) set footerChildren(ref: QueryList<MagicTableFooterDirective>) {
    this.footerMap = {};
    ref.forEach(i => (this.footerMap[i.MagicTableFooter] = i.template));
    this.cd.markForCheck();
  }

  private clearAddFilter() {
    this.addFilter.set({
      column: '',
      operation: '',
      value: '',
    });
  }

  btnAddFilter() {
    this.isAddingFilter.set(true);
    this.clearAddFilter();
  }
  btnCancelAddFilter() {
    this.isAddingFilter.set(false);
    this.clearAddFilter();
  }
  btnConfirmAddFilter() {
    this.filters.set([...this.filters(), this.addFilter()]);
    this.btnCancelAddFilter();
  }
  btnRemoveFilter(filter: MagicTableFilter) {
    let f = this.filters().findIndex(
      fil => fil.column === filter.column && fil.operation === filter.operation && fil.value === filter.value
    );
    if (f >= 0) {
      let newFilters = this.filters().slice();
      newFilters.splice(f, 1);
      this.filters.set(newFilters);
    }
  }
  onFilterColumnChange() {
    const f = this.colData()[this.addFilter().column].filter;
    if (!f || f.length === 0) return; // .length works on strings or arrays
    // Set the operation column to the first option to save a couple clicks
    this.addFilter.set({
      column: this.addFilter().column,
      operation: Array.isArray(f) ? f[0] : f,
      value: '',
    });
  }
  onOperationChange() {
    this.addFilter.set({
      column: this.addFilter().column,
      operation: this.addFilter().operation,
      value: '',
    });
  }
  onFilterValueChange(value: any) {
    this.addFilter.set({
      column: this.addFilter().column,
      operation: this.addFilter().operation,
      value,
    });
  }
  needsNoValue(filterOption: string) {
    return ['exists', "doesn'tExist", 'isTrue', 'isFalse'].includes(filterOption);
  }
  private isSameDay = (day1: Date, day2: Date) =>
    day1.getDate() === day2.getDate() &&
    day1.getMonth() === day2.getMonth() &&
    day1.getFullYear() === day2.getFullYear();

  private filterToFn = (f: MagicTableFilter) => {
    let transform =
      f.filterValue == null
        ? (d: MagicTableData) => d[f.column] ?? ''
        : (d: MagicTableData) => f.filterValue!(d[f.column]) ?? '';
    switch (f.operation) {
      case 'includes':
        return (d: MagicTableData) =>
          transform(d)
            .toString()
            .toLowerCase()
            .includes((f.value ?? '').toString().toLowerCase());
      case 'startsWith':
        return (d: MagicTableData) =>
          transform(d)
            .toString()
            .toLowerCase()
            .startsWith((f.value ?? '').toString().toLowerCase());
      case 'endsWith':
        return (d: MagicTableData) =>
          transform(d)
            .toString()
            .toLowerCase()
            .endsWith((f.value ?? '').toString().toLowerCase());
      case 'is':
        return (d: MagicTableData) =>
          transform(d).toString().toLowerCase() === (f.value ?? '').toString().toLowerCase();
      case 'isNot':
        return (d: MagicTableData) => transform(d).toString().toLowerCase() != (f.value ?? '').toString().toLowerCase();
      case 'greaterThan':
        return (d: MagicTableData) => transform(d) > Number(f.value ?? 0);
      case 'lessThan':
        return (d: MagicTableData) => transform(d) < Number(f.value ?? 0);
      case 'exists':
        return (d: MagicTableData) => transform(d) != undefined && transform(d).toString().length > 0;
      case "doesn'tExist":
        return (d: MagicTableData) => transform(d) == undefined || transform(d).toString().length <= 0;
      case 'matches':
        return (d: MagicTableData) => transform(d) === f.value;
      case 'isTrue':
        return (d: MagicTableData) => !!transform(d);
      case 'isFalse':
        return (d: MagicTableData) => !transform(d);
      case 'before':
        return (d: MagicTableData) => new Date(transform(d)) < new Date(f.value);
      case 'after':
        return (d: MagicTableData) => new Date(transform(d)) > new Date(f.value);
      case 'onDate':
        return (d: MagicTableData) => this.isSameDay(new Date(transform(d)), new Date(f.value));
    }
    return (d: MagicTableData) => true;
  };
  btnSortHeader(col: string) {
    if (this.sortBy() === col) {
      if (this.sortDir() === 'asc') this.sortDir.set('desc');
      else if (this.sortDir() === 'desc') {
        this.sortDir.set('none');
        this.sortBy.set('');
      } else if (this.sortDir() === 'none') this.sortDir.set('asc');
    } else {
      this.sortBy.set(col);
      this.sortDir.set('asc');
    }
  }
  getSortFn(index: string, sortDir: 'asc' | 'desc' | 'none') {
    const sort = this.colData()[index]?.sort ?? 'text';
    if (!sort || sortDir === 'none') return () => 0;
    let dirV = sortDir === 'asc' ? 1 : -1;

    if (sort === 'number' || sort === 'boolean') return (a: any, b: any) => (a - b) * dirV;
    else if (sort === 'text')
      return (a: any, b: any) => {
        let a_ = (a ?? '').toString().trim().toLowerCase(),
          b_ = (b ?? '').toString().trim().toLowerCase();
        if (a_ == b_) return 0;
        return a_ > b_ ? dirV : -dirV;
      };
    else if (sort === 'time') return (a: any, b: any) => (new Date(a).getTime() - new Date(b).getTime()) * dirV;
    else if (Array.isArray(sort))
      return (a: any, b: any) => {
        let sortLower = sort.map(s => (s ?? '').toString().trim().toLowerCase());
        let index1 = sortLower.indexOf((a ?? '').toString().trim().toLowerCase());
        let index2 = sortLower.indexOf((b ?? '').toString().trim().toLowerCase());
        return (index1 - index2) * dirV;
      };
    else if (typeof sort == 'function') return (a: any, b: any) => sort(a, b) * dirV;

    return () => 0;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateSize();
  }

  updateSize() {
    if (!this.breakable()) return;
    if (!this.elementRef?.nativeElement) return;
    this.flex = {};
    const myWidth = this.elementRef.nativeElement.offsetWidth - (this.scrollable() ? 17 : 0);
    const dCol = this.columns().map(s => this.colData()[s] ?? {});
    // If we're sortable, title has a 24px arrow + 8px gap. All cells have 8px + 8px padding
    var getFullColumnWidth = (d: MagicTableSingleColumnData) =>
      Math.max(d.width ?? DEFAULT_WIDTH, (d.titleWidth ?? DEFAULT_TITLE_WIDTH) + (d.sort ? 24 + 8 : 0)) + 16;
    const fullWidth = dCol.map(d => getFullColumnWidth(d)).reduce((a, b) => a + b, 0);
    if (fullWidth <= myWidth) {
      this.columns().forEach(c => (this.flex[c] = `1 1 ${getFullColumnWidth(this.colData()[c])}px`));
      this.size = 'lg';
      this.breakClasses = '';
      this.cd.markForCheck();
      return;
    }
    const leftWidth = dCol
      .filter((e, i) => !(i % 2))
      .map(i => (i.width ?? DEFAULT_WIDTH) + (i.titleWidth ?? DEFAULT_TITLE_WIDTH) + 5) // Add 5 to title for ': '
      .reduce((a, b) => Math.max(a, b), 0);
    const rightWidth = dCol
      .filter((e, i) => i % 2)
      .map(i => (i.width ?? DEFAULT_WIDTH) + (i.titleWidth ?? DEFAULT_TITLE_WIDTH) + 5) // Add 5 to title for ': '
      .reduce((a, b) => Math.max(a, b), 0);
    // 16px padding column 1, 8px padding column 2
    if (leftWidth + rightWidth + 24 <= myWidth) {
      const leftPx = (leftWidth / (leftWidth + rightWidth)) * myWidth - 10;
      const rightPx = (rightWidth / (leftWidth + rightWidth)) * myWidth - 10;
      this.columns().forEach((c, i) => (this.flex[c] = i % 2 ? `1 1 ${rightPx}px` : `1 1 ${leftPx}px`));
      this.size = 'md';
      this.breakClasses = 'two-col show-prefix ';
      this.cd.markForCheck();
      return;
    }
    this.columns().forEach((c, i) => (this.flex[c] = `1 0 ${myWidth}px`));
    this.size = 'sm';
    this.breakClasses = 'one-col show-prefix ';
    this.cd.markForCheck();
  }

  onPageChange(event: PageEvent) {
    this.pageSize.set(event.pageSize);
    this.pageNumber.set(event.pageIndex);
  }

  headerCheckboxClick() {
    if (this.all_filtered_selected) this.data().forEach(d => (d.checked = false));
    else this.data().forEach(d => (d.checked = true));
    this.refreshFilterCheck();
    this.checkbox.emit();
  }

  checkboxClick(row: MagicTableData) {
    row.checked = !row.checked;
    this.refreshFilterCheck();
    this.checkbox.emit();
  }

  refreshFilterCheck() {
    this.all_filtered_selected = !this.filteredData().find(d => !d.checked) && this.filteredData().length > 0;
    this.some_filtered_selected = !this.all_filtered_selected && !!this.filteredData().find(d => d.checked);
    this.select_count = this.filteredData().filter(d => d.checked).length;
    this.cd.markForCheck();
  }

  startEdit(paginatedIndex: number) {
    this.edit_sorted_index.set(paginatedIndex + this.firstItemViewed());
    this.edit_row_copy = { ...this.paginatedData()[paginatedIndex] };
  }
  cancelEdit() {
    this.edit_sorted_index.set(-1);
  }
  deleteRow() {
    this.onDelete.emit(this.sortedData()[this.edit_sorted_index()]);
    this.edit_sorted_index.set(-1);
  }
  saveEdit() {
    this.onSave.emit({ old: this.sortedData()[this.edit_sorted_index()], new: this.edit_row_copy });
    this.edit_sorted_index.set(-1);
  }
  highlight_edit(paginatedIndex: number) {
    return (
      this.edit_sorted_index() === paginatedIndex + this.firstItemViewed() &&
      JSON.stringify(this.edit_row_copy) != JSON.stringify(this.sortedData()[this.edit_sorted_index()])
    );
  }
  isValNamePair(item: any) {
    return typeof item === 'object' && Object.hasOwn(item, 'value') && Object.hasOwn(item, 'name');
  }

  // #region Printing
  // https://dev.to/fasidongit/the-near-ultimate-guide-to-printing-anything-using-angular-5h4j
  private viewContainerRef = inject(ViewContainerRef);
  printTable(iframe: HTMLIFrameElement, tableArea: TemplateRef<any>) {
    this.isAddingFilter.set(false);
    this.isPrinting.set(true); // Temporarily disables pagination
    const portalHost = new DomPortalOutlet(iframe.contentDocument!.body);
    const portal = new TemplatePortal(tableArea, this.viewContainerRef);
    portalHost.attach(portal);
    if (!iframe.contentWindow) return;
    iframe.contentWindow.onafterprint = () => {
      if (iframe.contentDocument) iframe.contentDocument.body.innerHTML = '';
      this.isPrinting.set(false);
      portalHost.detach();
    };
    this._attachStyles(iframe.contentWindow);
    // Wait to print until the style sheets are linked
    setTimeout(() => iframe.contentWindow?.print(), 100);
  }

  private _attachStyles(targetWindow: Window): void {
    // Copy styles from parent window
    document.querySelectorAll('style').forEach(htmlElement => {
      targetWindow.document.head.appendChild(htmlElement.cloneNode(true));
    });
    // Copy stylesheet link from parent window
    const styleSheetLinks = this._getStyleSheetElement();
    for (let sheet of styleSheetLinks) {
      targetWindow.document.head.appendChild(sheet);
    }
  }

  private _getStyleSheetElement() {
    let styleSheetLinks: HTMLLinkElement[] = [];
    document.querySelectorAll('link').forEach(htmlElement => {
      if (htmlElement.rel === 'stylesheet') {
        const styleSheetElement = document.createElement('link');
        const absoluteUrl = new URL(htmlElement.href).href;
        styleSheetElement.rel = 'stylesheet';
        styleSheetElement.type = 'text/css';
        styleSheetElement.href = absoluteUrl;
        styleSheetLinks.push(styleSheetElement);
      }
    });
    return styleSheetLinks;
  }
  // #endregion
}
