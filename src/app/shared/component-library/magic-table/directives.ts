import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[MagicTableBody]',
})
export class MagicTableBodyDirective {
  constructor(public template: TemplateRef<any>) {}
  @Input() MagicTableBody: string = '';
}

@Directive({
  selector: '[MagicTableEdit]',
})
export class MagicTableEditDirective {
  constructor(public template: TemplateRef<any>) {}
  @Input() MagicTableEdit: string = '';
}

@Directive({
  selector: '[MagicTableHeader]',
})
export class MagicTableHeaderDirective {
  constructor(public template: TemplateRef<any>) {}
  @Input() MagicTableHeader: string = '';
}

@Directive({
  selector: '[MagicTableFooter]',
})
export class MagicTableFooterDirective {
  constructor(public template: TemplateRef<any>) {}
  @Input() MagicTableFooter: string = '';
}
