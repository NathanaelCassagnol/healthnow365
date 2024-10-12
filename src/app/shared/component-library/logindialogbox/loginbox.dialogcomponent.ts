import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';

// #region Custom Classes

// #region Login Box Dialog Options Class

export interface LoginBoxDialogOptions extends MatDialogConfig {
    TitleText?: string;
    MessageText?: string;
    OKText?: string;
    CancelText?: string;
    IconColor?: string;
    IconName?: string;
    ShowIcon?: boolean;

    ImpersonatedUsername?: string;
    Validators?: ValidatorFn[];
    Username?: string;
}

// #endregion

// #region Login Box Dialog Result Class

export interface LoginBoxDialogResult {
    ImpersonatedUsername: string;
    Username: string;
    Password: string;
}

// #endregion

// #endregion

@Component({
    selector: 'dialog-loginbox-component',
    styleUrls: ['loginbox.dialogcomponent.scss'],
    templateUrl: 'loginbox.dialogcomponent.html',
})
export class LoginBoxDialogComponent implements OnInit {
    CancelTried: boolean;
    title: string;
    message: string;
    oktext: string;
    canceltext: string;
    validators: ValidatorFn[];
    username: string;

    loginForm: FormGroup;

    constructor(
        private dialogRef: MatDialogRef<LoginBoxDialogComponent>,
        @Inject(MAT_DIALOG_DATA) private data: LoginBoxDialogOptions,
        private fb: FormBuilder
    ) {
        this.CancelTried = false;
        this.title = data?.TitleText || 'Credentials Required';
        this.message = data?.MessageText || '';
        this.oktext = data?.OKText || 'OK';
        this.canceltext = data?.CancelText || 'Cancel';
        this.validators = data?.Validators || [];
        this.username = data?.Username || '';

        // Set up the form group
        this.loginForm = this.fb.group({
            username: [this.username, Validators.required],
            password: [null, Validators.required],
        });

        // If we were provided additional validators, set them now.
        const extraVals = this.validators.filter((v) => v !== Validators.required);
        if (extraVals.length > 0) {
            const ctrl = this.loginForm.get('username');
            const toSet = [Validators.required, ...extraVals];

            ctrl?.setValidators(this.validators);
            this.loginForm.updateValueAndValidity();
        }
    }

    ngOnInit() {}

    CancelHandler() {
        if (this.CancelTried !== true) {
            // Set the flag, so the user has to hit it a second time.
            this.CancelTried = true;
            return;
        }

        // Oh well. Close it.
        this.dialogRef.close(null);
    }

    OKHandler() {
        const response = this.loginForm.value;

        this.dialogRef.close(<LoginBoxDialogResult>{
            Username: response.username,
            Password: response.password,
        });
    }
}