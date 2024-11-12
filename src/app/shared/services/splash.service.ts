import { Component, Inject, Injectable, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_SNACK_BAR_DATA,
  MatSnackBar,
  MatSnackBarAction,
  MatSnackBarActions,
  MatSnackBarLabel,
  MatSnackBarRef,
} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SplashService {
  private snackbar = inject(MatSnackBar);
  private duration = 3000;

  secondOperationMessage = 'The database is currently busy. Please try again in 5 seconds.';
  getErrorMessage(error: any) {
    let msg = error;
    if (typeof error === 'string') msg = error;
    else if (error?.error?.message) msg = error.error.message;
    else if (error?.title) msg = error.title;
    else if (error?.error?.title) msg = error.error.title;

    if (msg.includes('A second operation was started on this context instance before a previous operation completed')) {
      msg = this.secondOperationMessage;
    }
    return msg;
  }

  error(error: any) {
    let msg = this.getErrorMessage(error);

    console.error(msg);
    const config = { duration: this.duration, data: { message: msg, color: 'red' } };
    this.snackbar.openFromComponent(CustomSnackbar, config);
  }
  success(message: string) {
    // console.log(message);
    const config = { duration: this.duration, data: { message, color: 'green' } };
    this.snackbar.openFromComponent(CustomSnackbar, config);
  }
  warn(message: string) {
    // console.warn(message);
    const config = { duration: this.duration, data: { message, color: 'yellow' } };
    this.snackbar.openFromComponent(CustomSnackbar, config);
  }
}

@Component({
  selector: 'snack-bar-annotated-component-example-snack',
  template: `
    <span matSnackBarLabel>
      <div class="flex-row gap-h h-100">
        <div [style.backgroundColor]="data.color" class="color"></div>
        <span>{{ data.message }}</span>
      </div>
    </span>
    <!-- <span matSnackBarActions>
      <button mat-button matSnackBarAction (click)="snackBarRef.dismissWithAction()"></button>
    </span> -->
  `,
  styles: `
    :host {
      display: flex;
    }
    .color {
      height: 100%;
      width: 10px;
      border-radius: 2px;
    }
  `,
  standalone: true,
  imports: [MatButtonModule, MatSnackBarLabel, MatSnackBarActions, MatSnackBarAction],
})
class CustomSnackbar {
  snackBarRef = inject(MatSnackBarRef);
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: { color: string; message: string }) {}
}
