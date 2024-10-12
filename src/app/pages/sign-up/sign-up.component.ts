import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { CreateUserData } from 'api/Users';
import { PhoneInput } from "../../shared/component-library/phone-input/phone-input.component";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  standalone: true,
  imports: [
    MatButtonModule,
    RouterModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    PhoneInput
],
})
export class SignUpComponent {
  page: number = 0;
  mySignupInfo: CreateUserData = {
    first_name: "",
    last_name: "",
    username: "",
    password: "",
    email: "",
    birth_date: new Date(),
    phone_number: ""
  };
  confirmPassword = "";

  buttonPatient() {
    this.page = 1;
  }
  buttonDoctor() {
    this.page = 1;
  }
  personalInfo() {
    this.page = 2;
  }
  skip2fa() {
    this.page = 3;
  }
  skipProvider() {
    this.submitSignup();
  }

  private submitSignup() {
    this.page = 4;
  }
}
