import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'schoolyear', standalone: true })
export class SchoolYearPipe implements PipeTransform {
  transform(year: string): string {
    if (year.length === 2) return '20' + year;
    if (year.length === 4) return `20${year.slice(0, 2)} - 20${year.slice(2)}`;
    return year;
  }
}
