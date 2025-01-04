import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
    selector: '[MagicTableBody]',
    standalone: false
})
export class MagicTableBodyDirective {
  constructor(public template: TemplateRef<any>) {}
  @Input() MagicTableBody: string = '';
}

@Directive({
    selector: '[MagicTableEdit]',
    standalone: false
})
export class MagicTableEditDirective {
  constructor(public template: TemplateRef<any>) {}
  @Input() MagicTableEdit: string = '';
}

@Directive({
    selector: '[MagicTableHeader]',
    standalone: false
})
export class MagicTableHeaderDirective {
  constructor(public template: TemplateRef<any>) {}
  @Input() MagicTableHeader: string = '';
}

@Directive({
    selector: '[MagicTableFooter]',
    standalone: false
})
export class MagicTableFooterDirective {
  constructor(public template: TemplateRef<any>) {}
  @Input() MagicTableFooter: string = '';
}
