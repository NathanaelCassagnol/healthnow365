import { Amplify } from 'aws-amplify';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

import outputs from '../../../amplify_outputs.json';

Amplify.configure(outputs);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    RouterModule,
  ]
})
export class AppComponent {
  title = 'healthnow';
}
