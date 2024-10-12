import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

// Part of the module defined in equals.validator.ts

@Directive({
  selector: '[equalsLenient]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EqualsLenientValidatorDirective,
      multi: true,
    },
  ],
})
export class EqualsLenientValidatorDirective implements Validator {
  @Input() equalsLenient: string = '';

  // Lenient = Clear spaces and make it case-insensitive
  validate(control: AbstractControl): ValidationErrors | null {
    let lenEquals = this.equalsLenient.replaceAll(' ', '').toLowerCase();
    let lenControl = control.value.replaceAll(' ', '').toLowerCase();
    return lenControl == lenEquals ? null : { equals: 'The value is invalid' };
  }
}
