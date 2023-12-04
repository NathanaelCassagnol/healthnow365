import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';

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
    CommonModule,
  ],
})
export class SignUpComponent {
  page: number = 0;

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
    this.page = 4;
  }
}
