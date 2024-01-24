import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/config/app.config';
import { AppComponent } from './app/config/app.component';

import { Amplify } from 'aws-amplify';
//import amplifyconfig from './amplifyconfiguration.json';
//Amplify.configure(amplifyconfig);
import awsExports from './aws-exports';
Amplify.configure(awsExports);

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
