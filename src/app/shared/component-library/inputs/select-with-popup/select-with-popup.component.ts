import { Component, forwardRef, HostBinding, inject, Inject, Input } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

// Based off this tutorial:
// https://coryrylan.com/blog/angular-custom-form-controls-with-reactive-forms-and-ngmodel

// The popup component is at the bottom of this file
// (I didn't include it as a separate file so that it isn't exported and accessible outside this file)

@Component({
  selector: 'select-with-popup',
  templateUrl: './select-with-popup.component.html',
  styleUrl: './select-with-popup.component.scss',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, FormsModule, MatIconModule, MatButtonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectWithPopupComponent),
      multi: true,
    },
  ],
})
export class SelectWithPopupComponent implements ControlValueAccessor {
  @Input() label = '';
  @Input() FormFieldClass = '';
  @Input() FormFieldStyle = '';
  @Input() SelectClass = '';
  @Input() SelectStyle = '';

  private _options: SelectOptions[] = [];
  @Input()
  set options(ops: (string | SelectOptions)[]) {
    this._options = ops.map(x => {
      if (typeof x == 'string') return { value: x, display: x, disabled: false };
      return x;
    });
  }
  get options(): SelectOptions[] {
    return this._options;
  }

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

  selectChoice(selection: MatSelectChange) {
    this.value = selection.value;
  }

  private dialog = inject(MatDialog);
  openPopup() {
    this.dialog
      .open(_SelectWithPopupPopupMenu, { data: { label: this.label, options: this.options } })
      .afterClosed()
      .subscribe(v => {
        if (v != null) {
          this.value = v;
        }
      });
  }
}

@Component({
  styleUrl: 'popup.scss',
  templateUrl: 'popup.html',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
})
class _SelectWithPopupPopupMenu {
  label: string = 'Select Choice';
  options: { value: any; display: string }[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) private dialogData: { label?: string; options: { value: any; display: string }[] }
  ) {
    if (dialogData.label) this.label = dialogData.label;
    this.options = dialogData.options;
  }

  private dialogRef = inject(MatDialogRef);
  send(value: any) {
    this.dialogRef.close(value);
  }

  scrollUp(elem: HTMLElement) {
    elem.scrollBy({
      top: -200,
      left: 0,
      behavior: 'smooth',
    });
  }
  scrollDown(elem: HTMLElement) {
    elem.scrollBy({
      top: 200,
      left: 0,
      behavior: 'smooth',
    });
  }
}

export type SelectOptions = {
  value: any;
  display: string;
  disabled?: boolean;
};
