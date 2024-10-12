import {MatProgressBarModule} from '@angular/material/progress-bar';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { CreateUserData, CreateUserResponse } from 'api/Users';
import { PhoneInput } from "../../shared/component-library/phone-input/phone-input.component";
import { DateInput } from 'app/shared/component-library/date-input/date-input.component';
import { AuthService } from 'app/services/auth.service';
import { PasswordInput } from 'app/shared/component-library/password-input/password-input.component';

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
    PhoneInput,
    DateInput,
    MatProgressBarModule,
    PasswordInput,
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
  createStatus?: CreateUserResponse;

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

  previousPage() {
    this.page --;
  }

  private auth = inject(AuthService);
  private async submitSignup() {
    var val = await this.auth.CreateUser(this.mySignupInfo);
    this.page = 4;
  }
}
