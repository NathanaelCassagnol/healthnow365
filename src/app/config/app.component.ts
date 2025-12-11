import { Amplify } from 'aws-amplify';
import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterLink, RouterModule } from '@angular/router';

import outputs from '../../../amplify_outputs.json';
import { TopNavMenuItem, TopnavmenuComponent } from 'app/shared/component-library/topnavmenu/topnavmenu.component';
import { AuthService } from 'app/services/auth.service';
import { AmplifyAuthenticatorModule, AuthenticatorService } from '@aws-amplify/ui-angular';

import FHIR from "fhirclient"

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
        MatToolbarModule,
        MatIconModule,
        RouterModule,
        TopnavmenuComponent,
        AmplifyAuthenticatorModule,
    ],
    standalone: true,
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

    const client = FHIR.client("https://r3.smarthealthit.org");
    client.request("Patient").then(console.log).catch(console.error);
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
