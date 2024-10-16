import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'SplitOnNewline',
  standalone: true,
})
export class SplitOnNewlinePipe implements PipeTransform {
  transform(value: any): any {
    if (Array.isArray(value)) return value;
    if (typeof value === 'string' && value.includes('\n')) return value.split('\n');
    return value;
  }
}
