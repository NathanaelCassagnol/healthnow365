import { Component, inject } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { AuthService } from 'app/services/auth.service';
import { FormsModule } from '@angular/forms';
import { PasswordInput } from 'app/shared/component-library/inputs/password-input/password-input.component';

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
    PasswordInput
  ],
})
export class LoginComponent {
  username = "";
  password = "";

  private auth = inject(AuthService);
  private router = inject(Router);

  login() {
    this.auth.SignIn(this.username, this.password).then(isSignedIn => {
      if (isSignedIn) {
        this.router.navigateByUrl("home");
      }
    });
  }
}
