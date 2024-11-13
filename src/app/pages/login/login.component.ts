import { Component, inject, OnInit } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { AuthService } from 'app/services/auth.service';
import { FormsModule } from '@angular/forms';
import { PasswordInput } from 'app/shared/component-library/inputs/password-input/password-input.component';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [
    MatButtonModule,
    RouterModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    PasswordInput,
  ],
})
export class LoginComponent implements OnInit {
  username = "";
  password = "";

  private auth = inject(AuthService);
  private router = inject(Router);

  ngOnInit(): void {
    this.auth.SignInWithUI();
  }

  login() {
    this.auth.SignIn(this.username, this.password).then(isSignedIn => {
      if (isSignedIn) {
        this.router.navigateByUrl("home");
      }
    });
  }
}
