import { DatePipe } from '@angular/common';
import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'LRD',
  standalone: true,
})
export class LeastRedundantDatePipe implements PipeTransform {
  // If the two dates match, it leaves out the date completely
  // Otherwise, if the date is this year, it gives m/d but not year (EDIT: Dates always have a year)
  // Otherwise it gives the full date with the year
  transform(mainDate?: Date | string, checkDate?: Date | string): any {
    if (!mainDate) return '';
    let format = 'M/d/yyyy, h:mm a';
    if (typeof mainDate == 'string') mainDate = new Date(mainDate);
    if (typeof checkDate == 'string') checkDate = new Date(checkDate);
    if (checkDate && isSameDay(mainDate, checkDate)) format = 'h:mm a';
    // else if (mainDate.getFullYear() === new Date().getFullYear()) format = 'M/d, h:mm a';
    return new DatePipe('en-US').transform(mainDate, format);
  }
}

function isSameDay(date1: Date, date2: Date) {
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
}
