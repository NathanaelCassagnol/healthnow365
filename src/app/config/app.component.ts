import { Amplify } from 'aws-amplify';
import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';

import outputs from '../../../amplify_outputs.json';
import { TopNavMenuItem, TopnavmenuComponent } from 'app/shared/component-library/topnavmenu/topnavmenu.component';
import { AuthService } from 'app/services/auth.service';

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
    TopnavmenuComponent
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

  private auth = inject(AuthService);

  UserMenuItems: TopNavMenuItem[] = [
    {
      MenuText: 'Logout',
      MenuIcon: 'exit_to_app',
      ActionFn: () => this.auth.SignOut(),
      Color: "primary",
    }
  ];

  private router = inject(Router);
  titleClick() {
    this.router.navigateByUrl("landing")
  }

  User = {Username: "Philip Sawyer"}
}
