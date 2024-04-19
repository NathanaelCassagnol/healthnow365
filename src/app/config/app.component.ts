import { Amplify } from 'aws-amplify';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import amplifyconfig from 'amplifyconfiguration.json';

Amplify.configure(amplifyconfig);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    RouterModule,
    AmplifyAuthenticatorModule,
  ]
})
export class AppComponent {
  title = 'healthnow';
}
