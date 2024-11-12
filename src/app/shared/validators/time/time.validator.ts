import { NgModule, Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[validTime]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: TimeValidatorDirective,
      multi: true,
    },
  ],
})
export class TimeValidatorDirective implements Validator {
  @Input() equals: string = '';

  validate(control: AbstractControl): ValidationErrors | null {
    const val = control.value + '';
    const invalidReturn = { validTime: 'Must be hh:mm AM/PM' };

    var hour: number = 0,
      minute: number = 0,
      xm: string = '';

    if (val.length == 7) {
      //h:mm xm
      if (val[1] != ':' || val[4] != ' ') return invalidReturn;

      hour = Number.parseInt(val[0], 10);
      minute = Number.parseInt(val[2] + val[3], 10);
      xm = (val[5] + val[6]).toLowerCase();
    } else if (val.length == 8) {
      //hh:mm xm
      if (val[2] != ':' || val[5] != ' ') return invalidReturn;

      hour = Number.parseInt(val[0] + val[1], 10);
      minute = Number.parseInt(val[3] + val[4], 10);
      xm = (val[6] + val[7]).toLowerCase();
    } else {
      return invalidReturn;
    }

    if (isNaN(hour)) return { validTime: 'The hour is invalid' };
    if (hour < 1 || hour > 12) return { validTime: 'Hour must be 1-12' };
    if (isNaN(minute)) return { validTime: 'The minute is invalid' };
    if (minute < 0 || minute > 59) return { validTime: 'Minute must be 00-59' };
    if (xm != 'am' && xm != 'pm') return { validTime: 'Must end in AM or PM' };

    return null;
  }
}

@NgModule({
  declarations: [TimeValidatorDirective],
  exports: [TimeValidatorDirective],
})
export class TimeValidatorModule {}
