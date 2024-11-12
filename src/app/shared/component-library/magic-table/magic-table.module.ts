import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MagicTableComponent } from './magic-table.component';
import {
  MagicTableBodyDirective,
  MagicTableEditDirective,
  MagicTableFooterDirective,
  MagicTableHeaderDirective,
} from './directives';
import { CdkTableModule } from '@angular/cdk/table';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { ArraySinglesPipe } from './array-singles.pipe';
import { CamelTitlePipe } from './camel-title.pipe';
import { DisplayAsPipe } from './display-as.pipe';
import { FooterTotalPipe } from './footer-total.pipe';
import { SplitOnNewlinePipe } from './split-on-newline.pipe';
import { StringifyDatePipe } from './stringify-date.pipe';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { IncludesPipe } from './includes.pipe';

@NgModule({
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
    MatCheckboxModule,
    SplitOnNewlinePipe,
    StringifyDatePipe,
    DisplayAsPipe,
    ArraySinglesPipe,
    IncludesPipe,
    MatButtonModule,
    MatDatepickerModule,
    MatDatepickerModule,
  ],
  declarations: [
    MagicTableComponent,
    MagicTableBodyDirective,
    MagicTableFooterDirective,
    MagicTableHeaderDirective,
    MagicTableEditDirective,
  ],
  exports: [
    MagicTableComponent,
    MagicTableBodyDirective,
    MagicTableFooterDirective,
    MagicTableHeaderDirective,
    MagicTableEditDirective,
  ],
})
export class MagicTableModule {}

export type MagicTableFooterTypes = 'row-counts' | 'custom' | 'none';
export type MagicTableFilterOptions =
  | 'includes'
  | 'startsWith'
  | 'endsWith'
  | 'is'
  | 'isNot'
  | 'greaterThan'
  | 'lessThan'
  | 'exists'
  | "doesn'tExist"
  | 'matches'
  | 'isTrue'
  | 'isFalse'
  | 'before'
  | 'after'
  | 'onDate';
export type MagicTableData = { [key: string]: any; checked?: boolean };
export type MagicTableSingleColumnData = {
  title?: string;
  width?: number;
  titleWidth?: number;
  filter?: MagicTableFilterOptions | MagicTableFilterOptions[];
  filterValue?: (input: any) => string;
  search?: boolean;
  sort?: 'text' | 'number' | 'boolean' | 'time' | string[] | number[] | Function; // String[] = Order in array
  display?: 'check-ex' | 'date' | 'time' | 'datetime' | 'money' | { value: any; name: any }[];
  group?: 'asc' | 'desc' | boolean;
  cellClick?: Function;
  // edit?: 'text' | 'number' | 'date' | 'time' | 'datetime' | any[];
  // If an array is given, it can optionally be {value: any, name: any}[]
  edit?: 'text' | 'boolean' | 'date' | any[]; // any[] = select with array of options
  editRequired?: boolean;
  editWidth?: string; // How wide is the edit textbox?
};
export type MagicTableColumnData = {
  [key: string]: MagicTableSingleColumnData;
};

export type MagicTableFilter = {
  column: string;
  operation: string;
  value: string | Date;
  filterValue?: (input: any) => string;
};
