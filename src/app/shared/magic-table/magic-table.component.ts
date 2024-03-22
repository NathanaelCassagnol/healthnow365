import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import {
  AfterContentInit,
  Component,
  ContentChildren,
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  QueryList,
  TemplateRef,
  inject,
} from '@angular/core';
import { CamelTitlePipe } from '../../pipes/camel-title.pipe';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Directive({
  standalone: true,
  selector: '[MagicTableBody]',
})
export class MagicTableBodyDirective {
  constructor(public template: TemplateRef<any>) {}
  @Input() MagicTableBody: string = '';
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
  ],
})
export class MagicTableComponent implements OnChanges, AfterContentInit {
  // Basic stuff
  @Input('columns') columns_input: string[] = [];
  @Input('columnData') columnData_input: MagicTableColumnData = {};
  @Input() data: MagicTableData[] = [];
  @Input() title: string = "";
  filteredData: MagicTableData[] = [];
  sortedData: MagicTableData[] = [];
  columns: string[] = [];
  colData: MagicTableColumnData = {};
  defaultWidth = 100;
  defaultTitleWidth = 50;
  // Classes
  baseClasses = 'striped-hover-table w-100 pad-cells mat-elevation-z10 ';
  inputClasses = '';
  breakClasses = '';
  // Breaking
  @Input('breakable') breakable_input: string | undefined;
  breakable = false;
  flex: { [key: string]: string } = {};
  size: 'lg' | 'md' | 'sm' = 'lg';
  // Filtering
  filterColumns: string[] = [];
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
  // Scrolling
  @Input('scrollable') scrollable_input: string | undefined;
  scrollable = false;
  // Footer
  @Input('footer') footer_input: string | undefined;
  hasFooter = false;

  private elementRef = inject(ElementRef); // Used when updating size

  ngOnChanges(): void {
    this.scrollable = this.scrollable_input != undefined;
    this.breakable = this.breakable_input != undefined;
    this.hasFooter = this.footer_input != undefined;
    this.inputClasses = (this.scrollable ? 'table-scrollable ' : '') + (this.breakable ? 'breakable-table ' : '');
    if (this.columns_input != undefined && this.columns_input.length > 0) this.columns = this.columns_input.slice();
    else this.columns = Object.keys(this.data[0]).filter(k => k != 'id');
    this.reloadFilteredData();
    this.setColData();
    this.updateSize();
  }
  setColData() {
    let pipe = new CamelTitlePipe();
    this.colData = {};
    this.filterColumns = [];
    this.columnMatches = {};
    this.columns.forEach(col => {
      this.colData[col] = {
        title: this.columnData_input[col]?.title ?? pipe.transform(col),
        width: this.columnData_input[col]?.width ?? this.defaultWidth,
        titleWidth: this.columnData_input[col]?.titleWidth ?? this.defaultTitleWidth,
        filterOn: this.columnData_input[col]?.filterOn,
        sortAs: this.columnData_input[col]?.sortAs,
      };
      const fo = this.colData[col].filterOn; // For brevity
      if (fo != undefined && fo.length > 0) this.filterColumns.push(col);
      if (fo != undefined && fo.includes('matches'))
        this.columnMatches[col] = [...new Set(this.data.map(d => d[col]).filter(d => d != undefined && d != ''))];
    });
  }

  @ContentChildren(MagicTableBodyDirective) bodyChildren!: QueryList<MagicTableBodyDirective>;
  bodyChildrenMap: { [key: string]: TemplateRef<any> } = {};
  ngAfterContentInit() {
    this.setTemplates(this.bodyChildren);
    this.bodyChildren.changes.subscribe(c => this.setTemplates(c));
  }
  setTemplates(input: QueryList<MagicTableBodyDirective>) {
    this.bodyChildrenMap = {};
    input.forEach(i => {
      this.bodyChildrenMap[i.MagicTableBody] = i.template;
    });
    console.log(this.bodyChildrenMap);
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
  reloadFilteredData() {
    this.filteredData = this.data.slice();
    let functionalFilters = this.filters.slice();
    if (
      this.addFilter.column != '' &&
      this.addFilter.operation != '' &&
      (this.addFilter.value != '' || this.addFilter.operation === 'exists')
    ) {
      functionalFilters.push({ ...this.addFilter });
    }
    let filterFuncs = functionalFilters.map(f => {
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
      }
      return (d: MagicTableData) => true;
    });
    filterFuncs.forEach(f => (this.filteredData = this.filteredData.filter(f)));
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
  applySort() {
    if (this.sortBy && this.sortDir != 'none') {
      let dirV = this.sortDir === 'asc' ? 1 : -1;
      this.sortedData = this.filteredData.slice();
      switch (this.colData[this.sortBy].sortAs) {
        case 'number':
          this.sortedData = this.sortedData.sort((a, b) => (a[this.sortBy] - b[this.sortBy]) * dirV);
          break;
        case 'text':
          this.sortedData = this.sortedData.sort(
            (a, b) => (a[this.sortBy].toLowerCase() > b[this.sortBy].toLowerCase() ? 1 : -1) * dirV
          );
          break;
      }
    } else this.sortedData = this.filteredData.slice();
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
}

type filterOptions =
  | 'includes'
  | 'startsWith'
  | 'endsWith'
  | 'equals'
  | 'greaterThan'
  | 'lessThan'
  | 'exists'
  | 'matches';
export type MagicTableData = { id: number; [key: string]: any };
export type MagicTableColumnData = {
  [key: string]: {
    title?: string;
    width?: number;
    titleWidth?: number;
    filterOn?: filterOptions[];
    sortAs?: 'text' | 'number';
  };
};

type tableFilter = {
  column: string;
  operation: string;
  value: filterOptions | '';
};
