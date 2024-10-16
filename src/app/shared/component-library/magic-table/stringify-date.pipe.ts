import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'StringifyDate',
  standalone: true,
})
// If it's a string, pass it through. If it's a date, turn it into a string.
export class StringifyDatePipe implements PipeTransform {
  transform(value: string | Date): string {
    if (typeof value === 'string') return value;
    return `${value.getMonth() + 1}/${value.getDate()}/${value.getFullYear()}`;
  }
}
