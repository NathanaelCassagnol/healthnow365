import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import {
  Component,
  ContentChildren,
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  QueryList,
  SimpleChanges,
  TemplateRef,
  inject,
  input,
} from '@angular/core';
import { CamelTitlePipe } from './camel-title.pipe';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { FooterTotalPipe } from './footer-total.pipe';

@Directive({
  standalone: true,
  selector: '[MagicTableBody]',
})
export class MagicTableBodyDirective {
  constructor(public template: TemplateRef<any>) {}
  @Input() MagicTableBody: string = '';
}

@Directive({
  standalone: true,
  selector: '[MagicTableHeader]',
})
export class MagicTableHeaderDirective {
  constructor(public template: TemplateRef<any>) {}
  @Input() MagicTableHeader: string = '';
}

@Directive({
  standalone: true,
  selector: '[MagicTableFooter]',
})
export class MagicTableFooterDirective {
  constructor(public template: TemplateRef<any>) {}
  @Input() MagicTableFooter: string = '';
}

@Component({
  selector: 'app-magic-table',
  styleUrl: './magic-table.component.scss',
  templateUrl: './magic-table.component.html',
  standalone: true,
  imports: [
    CdkTableModule,
    CamelTitlePipe,
    CommonModule,
    FormsModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    FooterTotalPipe,
  ],
})
export class MagicTableComponent implements OnChanges {
  // Basic stuff
  @Input('columns') columns_input: string[] = [];
  @Input('columnData') columnData_input: MagicTableColumnData = {};
  @Input() title: string = '';
  data = input<MagicTableData[]>([]);
  filteredData: MagicTableData[] = [];
  sortedData: MagicTableData[] = [];
  paginatedData: MagicTableData[] = [];
  columns: string[] = [];
  colData: MagicTableColumnData = {};
  defaultWidth = 100;
  defaultTitleWidth = 50;
  // Classes
  baseClasses = 'striped-hover-table w-100 pad-cells ';
  inputClasses = '';
  breakClasses = '';
  // Breaking
  @Input('breakable') breakable_input: string | undefined;
  breakable = false;
  flex: { [key: string]: string } = {};
  size: 'lg' | 'md' | 'sm' = 'lg';
  // Filtering
  filterColumns: string[] = [];
  @Input('filters') filters_input: tableFilter[] = [];
  filters: tableFilter[] = [];
  isAddingFilter = false;
  addFilter: tableFilter = {
    column: '',
    operation: '',
    value: '',
  };
  columnMatches: { [key: string]: string[] } = {};
  // Sorting
  sortBy = '';
  sortDir: 'asc' | 'desc' | 'none' = 'none';
  // Searching
  searchable = false;
  searchString = '';
  // Scrolling
  @Input('scrollable') scrollable_input: string | undefined;
  scrollable = false;
  // Footer
  @Input('footer') footer_input: 'row-counts' | 'custom' | undefined;
  footerType: 'row-counts' | 'custom' | 'none' = 'none';
  // Pagination
  @Input('paginate') paginate_input: string | undefined;
  paginate = false;
  pageSize = 5;
  pageNumber = 0;
  firstItemViewed = 0;
  lastItemViewed = 0;

  private elementRef = inject(ElementRef); // Used when updating size
  isArray = Array.isArray; // So I can use it in the template

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['scrollable_input']) this.scrollable = this.scrollable_input != undefined;
    if (changes['breakable_input']) this.breakable = this.breakable_input != undefined;
    if (changes['footer_input']) this.footerType = this.footer_input == undefined ? 'none' : this.footer_input;
    if (changes['paginate_input']) this.paginate = this.paginate_input != undefined;
    if (changes['filters_input']) this.filters = JSON.parse(JSON.stringify(this.filters_input));
    this.inputClasses = (this.scrollable ? 'table-scrollable ' : '') + (this.breakable ? 'breakable-table ' : '');
    if (this.columns_input != undefined && this.columns_input.length > 0) this.columns = this.columns_input.slice();
    else if (this.data().length) this.columns = Object.keys(this.data()[0]).filter(k => k != 'id');
    else this.columns = [];
    this.reloadFilteredData();
    this.setColData();
    this.updateSize();
  }
  setColData() {
    let pipe = new CamelTitlePipe();
    this.colData = {};
    this.filterColumns = [];
    this.columnMatches = {};
    const allColumnDataKeys = [...new Set([...this.columns, ...Object.keys(this.columnData_input)])];
    allColumnDataKeys.forEach(col => {
      this.colData[col] = {
        ...this.columnData_input[col],
        title: this.columnData_input[col]?.title ?? pipe.transform(col),
        width: this.columnData_input[col]?.width ?? this.defaultWidth,
        titleWidth: this.columnData_input[col]?.titleWidth ?? this.defaultTitleWidth,
      };
    });
    Object.entries(this.colData).forEach(([key, colVal]) => {
      const fo = colVal.filterOn; // For brevity
      if (fo != undefined && fo.length > 0) {
        this.filterColumns.push(key);
        if (fo.includes('matches')) {
          this.columnMatches[key] = [
            ...new Set(
              this.data()
                .map(d => d[key])
                .filter(d => d != undefined && d != '')
            ),
          ];
          if (colVal?.sortAs) this.columnMatches[key] = this.columnMatches[key].sort(this.getSortFn(key, 'asc'));
        }
      }
    });
    this.searchable = Object.values(this.colData).find(cd => cd.applySearch) != undefined;
  }

  bodyMap: { [key: string]: TemplateRef<any> } = {};
  headerMap: { [key: string]: TemplateRef<any> } = {};
  footerMap: { [key: string]: TemplateRef<any> } = {};
  @ContentChildren(MagicTableHeaderDirective) set headerChildren(ref: QueryList<MagicTableHeaderDirective>) {
    this.headerMap = {};
    ref.forEach(i => (this.headerMap[i.MagicTableHeader] = i.template));
  }
  @ContentChildren(MagicTableBodyDirective) set bodyChildren(ref: QueryList<MagicTableBodyDirective>) {
    this.bodyMap = {};
    ref.forEach(i => (this.bodyMap[i.MagicTableBody] = i.template));
  }
  @ContentChildren(MagicTableFooterDirective) set footerChildren(ref: QueryList<MagicTableFooterDirective>) {
    this.footerMap = {};
    ref.forEach(i => (this.footerMap[i.MagicTableFooter] = i.template));
  }

  btnAddFilter() {
    this.isAddingFilter = true;
    this.addFilter = {
      column: '',
      operation: '',
      value: '',
    };
  }
  btnCancelAddFilter() {
    this.isAddingFilter = false;
    this.addFilter = {
      column: '',
      operation: '',
      value: '',
    };
    this.reloadFilteredData();
  }
  btnConfirmAddFilter() {
    this.filters.push(this.addFilter);
    this.btnCancelAddFilter();
  }
  btnRemoveFilter(filter: tableFilter) {
    let f = this.filters.findIndex(
      fil => fil.column === filter.column && fil.operation === filter.operation && fil.value === filter.value
    );
    if (f >= 0) this.filters.splice(f, 1);
    this.reloadFilteredData();
  }
  onFilterColumnChange() {
    // Set the operation column to the first option to save a couple clicks
    let operation = this.colData[this.addFilter.column].filterOn?.[0] ?? '';
    if (operation != '') this.addFilter.operation = operation;
    this.addFilter.value = '';
    this.reloadFilteredData();
  }
  onOperationChange() {
    this.addFilter.value = '';
    this.reloadFilteredData();
  }
  needsNoValue(filterOption: string) {
    return ['exists', 'isTrue', 'isFalse'].includes(filterOption);
  }
  reloadFilteredData() {
    this.filteredData = this.data().slice();
    let functionalFilters = this.filters.slice();
    if (
      this.addFilter.column != '' &&
      this.addFilter.operation != '' &&
      (this.addFilter.value != '' || this.needsNoValue(this.addFilter.operation))
    ) {
      functionalFilters.push({ ...this.addFilter });
    }
    let filterFuncs = functionalFilters.map(f => {
      // array+'' turns arrays into strings, allowing you to search them with includes, startsWith, and endsWith (equals won't be useful)
      switch (f.operation) {
        case 'includes':
          return (d: MagicTableData) => (d[f.column] + '').toLowerCase().includes(f.value.toLowerCase());
        case 'startsWith':
          return (d: MagicTableData) => (d[f.column] + '').toLowerCase().startsWith(f.value.toLowerCase());
        case 'endsWith':
          return (d: MagicTableData) => (d[f.column] + '').toLowerCase().endsWith(f.value.toLowerCase());
        case 'equals':
          return (d: MagicTableData) => (d[f.column] + '').toLowerCase() === (f.value + '').toLowerCase();
        case 'greaterThan':
          return (d: MagicTableData) => d[f.column] > Number(f.value);
        case 'lessThan':
          return (d: MagicTableData) => d[f.column] < Number(f.value);
        case 'exists':
          return (d: MagicTableData) => d[f.column] != undefined && (d[f.column] + '').length > 0;
        case 'matches':
          return (d: MagicTableData) => d[f.column] === f.value;
        case 'isTrue':
          return (d: MagicTableData) => !!d[f.column];
        case 'isFalse':
          return (d: MagicTableData) => !d[f.column];
      }
      return (d: MagicTableData) => true;
    });
    filterFuncs.forEach(f => (this.filteredData = this.filteredData.filter(f)));
    if (this.searchable && this.searchString != '') {
      // TODO: Make this handle dates better- Currently searching dates as e.g. 'Mon Mar 25 2024 08:55:44 GMT-0400 (Eastern Daylight Time)'
      // Needs to search array entries better as well
      this.filteredData = this.filteredData.filter(d =>
        Object.entries(d).find(
          e => this.colData[e[0]].applySearch && (e[1] + '').toLowerCase().includes(this.searchString.toLowerCase())
        )
      );
    }
    this.applySort();
  }
  btnSortHeader(col: string) {
    if (this.sortBy === col) {
      if (this.sortDir === 'asc') this.sortDir = 'desc';
      else if (this.sortDir === 'desc') {
        this.sortDir = 'none';
        this.sortBy = '';
      } else if (this.sortDir === 'none') this.sortDir = 'asc';
    } else {
      this.sortBy = col;
      this.sortDir = 'asc';
    }
    this.applySort();
  }
  getSortFn(index: string, sortDir: 'asc' | 'desc' | 'none') {
    const sort = this.colData[index]?.sortAs;
    if (!sort || sortDir === 'none') return () => 0;
    let dirV = sortDir === 'asc' ? 1 : -1;
    if (sort === 'number') return (a: any, b: any) => (a - b) * dirV;
    else if (sort === 'text' || sort === 'time')
      return (a: any, b: any) => ((a + '').toLowerCase() > (b + '').toLowerCase() ? 1 : -1) * dirV;
    else if (Array.isArray(sort))
      return (a: any, b: any) => {
        let index1 = sort.indexOf((a + '').toLowerCase());
        let index2 = sort.indexOf((b + '').toLowerCase());
        return (index1 - index2) * dirV;
      };
    return () => 0;
  }
  applySort() {
    if (this.sortBy && this.sortDir != 'none') {
      const sortFunc = this.getSortFn(this.sortBy, this.sortDir);
      this.sortedData = this.filteredData.slice().sort((a, b) => sortFunc(a[this.sortBy], b[this.sortBy]));
    } else this.sortedData = this.filteredData.slice();
    this.reloadPaginatedData();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateSize();
  }

  updateSize() {
    if (!this.breakable) return;
    if (!this.elementRef?.nativeElement) return;
    this.flex = {};
    let myWidth = this.elementRef.nativeElement.offsetWidth;
    if (this.scrollable) myWidth -= 17;
    let dCol = this.columns.map(s => this.colData[s] ?? {});
    let fullWidth = dCol.map(d => d.width ?? this.defaultWidth).reduce((a, b) => a + b, 0);
    if (fullWidth <= myWidth) {
      this.columns.forEach(c => (this.flex[c] = `1 0 ${this.colData[c]?.width ?? this.defaultWidth}px`));
      this.size = 'lg';
      this.breakClasses = '';
      return;
    }
    let leftWidth = dCol
      .filter((e, i) => !(i % 2))
      .map(i => (i.width ?? this.defaultWidth) + (i.titleWidth ?? this.defaultTitleWidth))
      .reduce((a, b) => Math.max(a, b), 0);
    let rightWidth = dCol
      .filter((e, i) => i % 2)
      .map(i => (i.width ?? this.defaultWidth) + (i.titleWidth ?? this.defaultTitleWidth))
      .reduce((a, b) => Math.max(a, b), 0);
    if (leftWidth + rightWidth <= myWidth) {
      let leftPx = (leftWidth / (leftWidth + rightWidth)) * myWidth;
      let rightPx = (rightWidth / (leftWidth + rightWidth)) * myWidth;
      this.columns.forEach((c, i) => (this.flex[c] = i % 2 ? `1 1 ${rightPx}px` : `1 1 ${leftPx}px`));
      this.size = 'md';
      this.breakClasses = 'two-col show-prefix ';
      return;
    }
    this.columns.forEach((c, i) => (this.flex[c] = `1 0 ${myWidth}px`));
    this.size = 'sm';
    this.breakClasses = 'one-col show-prefix ';
  }

  onPageChange(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageNumber = event.pageIndex;
    this.reloadPaginatedData();
  }

  reloadPaginatedData() {
    if (this.paginate) {
      this.firstItemViewed = this.pageNumber * this.pageSize;
      this.lastItemViewed = Math.min((this.pageNumber + 1) * this.pageSize - 1, this.sortedData.length - 1);
      this.paginatedData = this.sortedData.slice(this.firstItemViewed, this.lastItemViewed + 1);
    } else {
      this.firstItemViewed = this.sortedData.length === 0 ? -1 : 0;
      this.lastItemViewed = this.sortedData.length - 1;
      this.paginatedData = this.sortedData.slice();
    }
  }
}

type filterOptions =
  | 'includes'
  | 'startsWith'
  | 'endsWith'
  | 'equals'
  | 'greaterThan'
  | 'lessThan'
  | 'exists'
  | 'matches'
  | 'isTrue'
  | 'isFalse';
export type MagicTableData = { [key: string]: any };
export type MagicTableColumnData = {
  [key: string]: {
    title?: string;
    width?: number;
    titleWidth?: number;
    filterOn?: filterOptions[];
    applySearch?: boolean;
    sortAs?: 'text' | 'number' | 'time' | string[]; // String[] = Order in array
    display?: 'check-ex'; // As I add more custom display types, I'll add them here
  };
};

type tableFilter = {
  column: string;
  operation: string;
  value: string;
};
