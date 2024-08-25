import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  standalone: true,
  imports: [
    MatButtonModule,
    RouterModule,
  ],
})
export class LandingComponent {
  private auth = inject(AuthService);
  ServerButton() {
    this.auth.SendConnectionRequest();
  }
}
