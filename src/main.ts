import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/config/app.config';
import { AppComponent } from './app/config/app.component';
import { Amplify } from "aws-amplify"
import outputs from "../amplify_outputs.json"

Amplify.configure(outputs)

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
