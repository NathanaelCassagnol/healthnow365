import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../services/auth.service';
import { trigger } from '@angular/animations';
import { fadeTransition, slideTransition } from 'app/shared/transitions';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  standalone: true,
  imports: [
    MatButtonModule,
    RouterModule,
  ],
  animations: [
    trigger("fade", fadeTransition(200)),
    trigger("moveUp", slideTransition(200, "0px", "100px"))
  ]
})
export class LandingComponent {
  private auth = inject(AuthService);
  ServerButton() {
    this.auth.SendConnectionRequest();
  }
}
