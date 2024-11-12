import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'FooterTotalPipe',
  standalone: true,
})
export class FooterTotalPipe implements PipeTransform {
  transform(value: {
    first: number;
    last: number;
    modCount: number;
    totalCount: number;
    selectedCount: number;
    addons?: any[] | undefined;
  }): string {
    let components = [];
    if ((value.first != -1 && value.first != 0) || value.last != value.modCount - 1)
      components.push(`Showing ${value.first + 1} - ${value.last + 1}`);
    if (value.modCount != value.totalCount) components.push(`Matches filters: ${value.modCount}`);
    components.push(`Total items: ${value.totalCount}`);
    if (value.selectedCount != 0) components.push(`Selected: ${value.selectedCount}`);
    if (value.addons?.length) components.push(...value.addons);
    return components.join('  |  ');
  }
}
