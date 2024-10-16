import { NgModule, Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { EqualsLenientValidatorDirective } from './equals-lenient.validator';

@Directive({
  selector: '[equals]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EqualsValidatorDirective,
      multi: true,
    },
  ],
})
export class EqualsValidatorDirective implements Validator {
  @Input() equals: string = '';

  validate(control: AbstractControl): ValidationErrors | null {
    return control.value == this.equals ? null : { equals: 'The value is invalid' };
  }
}

@NgModule({
  declarations: [EqualsValidatorDirective, EqualsLenientValidatorDirective],
  exports: [EqualsValidatorDirective, EqualsLenientValidatorDirective],
})
export class EqualsValidatorModule {}
