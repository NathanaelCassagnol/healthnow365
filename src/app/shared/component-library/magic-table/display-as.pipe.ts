import { CurrencyPipe, DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'DisplayAsPipe',
  standalone: true,
})
export class DisplayAsPipe implements PipeTransform {
  transform(value: any, displayAs?: string | { value: any; name: any }[]): string {
    if (Array.isArray(displayAs) && Object.hasOwn(displayAs[0], 'value') && Object.hasOwn(displayAs[0], 'name')) {
      let foundOption = displayAs.find(v => v.value == value);
      if (foundOption) return foundOption.name;
      return value;
    }
    switch (displayAs) {
      case 'date':
        return new DatePipe('en-US').transform(value, 'shortDate') ?? '';
      case 'time':
        return new DatePipe('en-US').transform(value, 'shortTime') ?? '';
      case 'datetime':
        return new DatePipe('en-US').transform(value, 'short') ?? '';
      case 'money':
        return new CurrencyPipe('en-US').transform(value) ?? '';
    }
    return value;
  }
}
