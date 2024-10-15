import { Component, computed, forwardRef, HostBinding, inject, Inject, input, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { OverlayModule } from '@angular/cdk/overlay';
import { fadeTransition } from '../../../transitions';
import { trigger } from '@angular/animations';
import { TimeValidatorModule } from '../../../validators/time/time.validator';

@Component({
  selector: 'timepicker-circle',
  templateUrl: './timepicker-circle.component.html',
  styleUrl: './timepicker-circle.component.scss',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    OverlayModule,
    TimeValidatorModule,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TimepickerCircle),
      multi: true,
    },
  ],
  animations: [trigger('fade', fadeTransition(100))],
})
export class TimepickerCircle implements ControlValueAccessor, OnInit {
  @Input() label = '';
  @Input() FormFieldClass = '';
  @Input() FormFieldStyle = '';
  @Input() InputClass = '';
  @Input() InputStyle = '';
  @Input() name = '';
  openOnFocus_input = input<boolean | '' | undefined>(undefined, { alias: 'openOnFocus' });
  private openOnFocus = computed(() => this.openOnFocus_input() !== undefined && this.openOnFocus_input() !== false);

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

  onFocus() {
    if (this.openOnFocus()) {
      if (!this.isOpen) this.openAndClear();
    }
  }

  ngOnInit(): void {
    setTimeout(() => this.checkValueCorrection());
  }

  checkValueCorrection() {
    let regexTest = this.value?.match(/^(\d*):(\d*):(\d*)$/);
    if (regexTest?.length) {
      // It is in format hh:mm:ss
      let h = Number.parseInt(regexTest[1]) ?? 12;
      let m = Number.parseInt(regexTest[2]) ?? 0;
      let xm = h >= 12 ? 'PM' : 'AM';
      if (h > 12) h -= 12;
      if (h == 0) h = 12;
      this.value = h + ':' + m.toString().padStart(2, '0') + ' ' + xm;
      return;
    }

    regexTest = this.value?.match(/^(\d*):(\d*):(\d*) ([aApP][mM])$/);
    if (regexTest?.length) {
      // It is in format hh:mm:ss xm
      let h = Number.parseInt(regexTest[1]) ?? 12;
      let m = Number.parseInt(regexTest[2]) ?? 0;
      let xm = (regexTest[4] + '').toUpperCase();
      if (h > 12) h -= 12;
      if (h == 0) h = 12;
      this.value = h + ':' + m.toString().padStart(2, '0') + ' ' + xm;
      return;
    }
  }

  // Generate arrays for 1...12 and 1...60 to use in the template
  hourList = Array.from({ length: 12 }, (_, i) => i + 1);
  minuteList = Array.from({ length: 60 }, (_, i) => i + 1);

  targetHandRotation = 0;
  mode: 'h' | 'm' | 'xm' = 'h';
  currentHour = 0;
  currentMinute = 0;
  currentXm = 'AM';

  calculateAngles(event: { clientX: number; clientY: number }, hand: HTMLElement) {
    if (this.mode == 'xm') return;
    var divisions = this.mode == 'h' ? 12 : 60;
    let rect = hand.getBoundingClientRect();
    let dx = event.clientX - rect.left;
    let dy = event.clientY - rect.top;
    // If we're near the center, don't continue
    if (Math.abs(dx) < 30 && Math.abs(dy) < 30) return false;

    let continuousAngle = (Math.atan2(dy, dx) / Math.PI) * 180;
    // prettier-ignore
    var nearestSlot = Math.floor(
        // Offset the angle so it rounds centered on a division
        (continuousAngle + 360 / divisions / 2)
        // Divide so it is between 0 and [divisions]
        / 360 * divisions
      );
    var nearestNumber = nearestSlot + divisions / 4;
    while (nearestNumber <= 0) nearestNumber += divisions;
    if (this.mode == 'h') this.currentHour = nearestNumber;
    else if (this.mode == 'm') this.currentMinute = nearestNumber % 60;

    let newRotation = (nearestSlot * 360) / divisions;
    while (newRotation > this.targetHandRotation + 180) newRotation -= 360;
    while (newRotation < this.targetHandRotation - 180) newRotation += 360;
    this.targetHandRotation = newRotation;

    return true;
  }

  processClick(event: { clientX: number; clientY: number }, hand: HTMLElement) {
    if (this.mode == 'xm') {
    } else {
      this.calculateAngles(event, hand);
      if (this.mode == 'h') this.mode = 'm';
      else if (this.mode == 'm') this.mode = 'xm';
    }
  }

  hoverXm(xm: string) {
    this.currentXm = xm;
  }
  clickXm(xm: string) {
    this.currentXm = xm;
    this.value = this.currentHour + ':' + this.currentMinute.toString().padStart(2, '0') + ' ' + this.currentXm;
    this.close();
  }

  isOpen = false;
  openAndClear(elemToFocus?: HTMLElement) {
    this.currentHour = 0;
    this.currentMinute = 0;
    this.currentXm = 'AM';
    this.mode = 'h';
    this.open(elemToFocus);
  }
  open(elemToFocus?: HTMLElement) {
    if (elemToFocus) elemToFocus.focus();
    this.isOpen = true;
  }
  close() {
    this.isOpen = false;
  }
  keydown(event: any) {
    // It already closes on escape
    // Keep that behavior and make sure it is registered as a close so we can re-open

    // event.key or event.code?
    if (event.key == 'Escape') {
      this.close();
    }
  }
}
