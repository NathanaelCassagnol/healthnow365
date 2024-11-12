import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'stringToDays', standalone: true })
export class StringToDaysPipe implements PipeTransform {
  transform(days: string): string[] {
    let ret: string[] = [];
    if (days.includes('M')) ret.push('Monday');
    if (days.includes('T')) ret.push('Tuesday');
    if (days.includes('W')) ret.push('Wednesday');
    if (days.includes('H')) ret.push('Thursday');
    if (days.includes('F')) ret.push('Friday');
    if (days.includes('S')) ret.push('Saturday');
    if (days.includes('U')) ret.push('Sunday');
    return ret;
  }
}
