import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'includes', standalone: true })
export class IncludesPipe implements PipeTransform {
  transform(array: any[], value: any): boolean {
    return array.includes(value);
  }
}
