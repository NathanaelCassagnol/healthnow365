import { Amplify } from 'aws-amplify';
import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterLink, RouterModule } from '@angular/router';

import outputs from '../../../amplify_outputs.json';
import { TopNavMenuItem, TopnavmenuComponent } from 'app/shared/component-library/topnavmenu/topnavmenu.component';
import { AuthService } from 'app/services/auth.service';
import { AmplifyAuthenticatorModule, AuthenticatorService } from '@aws-amplify/ui-angular';

Amplify.configure(outputs);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    RouterModule,
    TopnavmenuComponent,
    AmplifyAuthenticatorModule,
]
})
export class AppComponent {
  MenuItems: TopNavMenuItem[] = [
    {
      MenuText: 'Home',
      MenuIcon: 'home',
      ActionRoute: ['home'],
      Color: "primary",
    }
  ];
    
  constructor(public authenticator: AuthenticatorService) {
    Amplify.configure(outputs);
  }

  UserMenuItems: TopNavMenuItem[] = [
    {
      MenuText: 'Logout',
      MenuIcon: 'exit_to_app',
      ActionType: "SignOut",
      Color: "primary",
    }
  ];

  router = inject(Router);
  titleClick() {
    this.router.navigateByUrl("landing")
  }

  // User = {Username: "Philip Sawyer"}
}
