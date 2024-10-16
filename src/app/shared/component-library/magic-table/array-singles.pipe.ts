import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ArraySingles',
  standalone: true,
})
// If it's a string, pass it through. If it's a date, turn it into a string.
export class ArraySinglesPipe implements PipeTransform {
  transform(value: any): any[] {
    return Array.isArray(value) ? value : [value];
  }
}
