import { PipeTransform, Pipe } from '@angular/core';

const MONTHS = [
  '',
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

@Pipe({ name: 'month', standalone: true })
export class MonthPipe implements PipeTransform {
  transform(monthNumber: number): string {
    if (monthNumber < 1 || monthNumber > 12) {
      console.error('Month index must be in range [1, 12] but was ' + monthNumber + '.');
      return '';
    }
    return MONTHS[monthNumber];
  }
}
