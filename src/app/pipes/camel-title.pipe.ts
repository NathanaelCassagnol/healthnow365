import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'CamelTitlePipe',
  standalone: true,
})
export class CamelTitlePipe implements PipeTransform {
  transform(value?: string | null): string {
    if (!value) return '';
    let state = states.start;
    let ret = '';
    for (const c of value) {
      let currentType = getCharType(c);
      if (currentType === states.uppercase && state != states.start) {
        ret += ' ' + c;
        state = states.uppercase;
      } else if (currentType === states.lowercase && state === states.start) {
        ret += c.toUpperCase();
        state = states.uppercase;
      } else if (currentType === states.other && state === states.lowercase) {
        ret += ' ' + c;
        state = states.other;
      } else {
        ret += c;
        state = currentType;
      }
    }

    return ret;
  }
}
enum states {
  start,
  lowercase,
  uppercase,
  other,
}
const getCharType = (char: string) => {
  if (char >= 'a' && char <= 'z') return states.lowercase;
  if (char >= 'A' && char <= 'Z') return states.uppercase;
  return states.other;
};
