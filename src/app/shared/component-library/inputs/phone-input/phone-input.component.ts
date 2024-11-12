import { Component, computed, forwardRef, HostBinding, input, Input, OnInit, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PhonePipe } from '../../../pipes/phone.pipe';
import { DigitOnlyModule } from '../../../validators/digit-only/digit-only.module';

@Component({
  selector: 'phone-input',
  templateUrl: './phone-input.component.html',
  styleUrl: './phone-input.component.scss',
  standalone: true,
  imports: [MatFormFieldModule, FormsModule, MatInputModule, PhonePipe, DigitOnlyModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PhoneInput),
      multi: true,
    },
  ],
})
export class PhoneInput implements ControlValueAccessor, OnInit {
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

  ngOnInit(): void {
    setTimeout(() => {
      if (this.value == null) this.value = '';
      this.value = this.toNumber(this.value);
      this.inputText = this.toPhoneString(this.value);
    });
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

  private isDigit = (inp: string) => inp >= '0' && inp <= '9';

  inputText = '';
  private toPhoneString = new PhonePipe().transform;
  private toNumber = new PhonePipe().onlyNumbers;
  private previousInputText = '';
  inputChange(event: any, input: HTMLInputElement) {
    // Detect backspaces
    let newInp = input.value;
    if (this.previousInputText.length > newInp.length) {
      // Find the first deleted character
      let index = 0;
      while (index < this.previousInputText.length && this.previousInputText[index] == newInp[index]) index++;
      // If it's a non-number, delete back until you hit a number
      let deletedChar = this.previousInputText[index];
      if (index < this.previousInputText.length && !this.isDigit(deletedChar)) {
        let firstDelete = index - 1;
        while (firstDelete > 0 && !this.isDigit(newInp[firstDelete])) {
          firstDelete--;
        }
        // Delete the specified characters
        newInp = newInp.slice(0, firstDelete) + newInp.slice(index);
      }
    }

    this.inputText = this.toPhoneString(newInp);
    input.value = this.inputText;
    this.value = this.toNumber(this.inputText);

    this.previousInputText = this.inputText;
  }
}
