import { Component, computed, forwardRef, HostBinding, input, Input, OnInit, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'date-input',
  templateUrl: './date-input.component.html',
  styleUrl: './date-input.component.scss',
  standalone: true,
  imports: [MatFormFieldModule, FormsModule, MatInputModule, MatDatepickerModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateInput),
      multi: true,
    },
  ],
})
export class DateInput implements ControlValueAccessor {
  @Input() label = '';
  @Input() FormFieldClass = '';
  @Input() FormFieldStyle = '';
  @Input() InputClass = '';
  @Input() InputStyle = '';
  @Input() name = '';
  required_input = input<boolean | '' | undefined>(undefined, { alias: 'required' });
  required = computed(() => this.required_input() !== undefined && this.required_input() !== false);

  @HostBinding('attr.id')
  externalId: string | null = '';

  private _ID = '';
  @Input()
  set id(value: string) {
    this._ID = value;
    this.externalId = null;
  }
  get id() {
    return this._ID;
  }

  @Input('value') _value: any = null;
  onChange: any = () => {};
  onTouched: any = () => {};

  get value() {
    return this._value;
  }

  set value(val) {
    this._value = val;
    this.onChange(val);
    this.onTouched();
  }

  registerOnChange(fn: Function) {
    this.onChange = fn;
  }

  registerOnTouched(fn: Function) {
    this.onTouched = fn;
  }

  writeValue(value: any) {
    if (value) {
      this.value = value;
    }
  }
}
