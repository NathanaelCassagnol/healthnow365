import { NgModule, Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { Observable } from 'rxjs';

import { LoginBoxDialogComponent, LoginBoxDialogOptions, LoginBoxDialogResult } from './loginbox.dialogcomponent';
import { CoreDialogModule, ScreenSizeService } from '@polk_county_public_schools/ngx-pcps-dialogs/core';

@Injectable()
export class LoginBoxDialogService {
  smallMediaSize: boolean;

  constructor(private matDialog: MatDialog, private mediaChange: ScreenSizeService) {
    this.smallMediaSize = this.mediaChange?.ScreenSize?.IsSmallDisplay || false;
  }

  // #region Close All Dialogs Service Call

  CloseAllDialogs(): void {
    this.matDialog.closeAll();
  }

  // #endregion

  // #region Open

  Open(options?: LoginBoxDialogOptions): Observable<LoginBoxDialogResult> {
    const openHandle = this.matDialog.open<LoginBoxDialogComponent>(LoginBoxDialogComponent, {
      disableClose: true,
      data: {
        TitleText: 'Credentials Required...',
        MessageText: '',
        InputHint: '',
        OKText: 'OK',
        CancelText: 'Cancel',
        ...options,
      },
      maxHeight: '85vh',
    });

    return openHandle.afterClosed();
  }

  // #endregion
}

@NgModule({
  imports: [
    CoreDialogModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
  ],
  declarations: [LoginBoxDialogComponent],
  exports: [LoginBoxDialogComponent],
  providers: [DatePipe, LoginBoxDialogService],
})
export class LoginBoxDialogModule {}
