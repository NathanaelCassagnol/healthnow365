import { Routes } from '@angular/router';
import { LandingComponent } from '../pages/landing/landing.component';
import { AboutComponent } from '../pages/about/about.component';
import { LoginComponent } from '../pages/login/login.component';
import { SignUpComponent } from '../pages/sign-up/sign-up.component';
import { HomeComponent } from '../pages/home/home.component';
import { TestingComponent } from '../pages/testing/testing.component';
import { CallbackComponent } from '../pages/callback/callback.component';

export const routes: Routes = [
    {path: '', redirectTo: 'landing', pathMatch: 'full'},
    {path: 'landing', component: LandingComponent},
    {path: 'about', component: AboutComponent},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignUpComponent},
    {path: 'home', component: HomeComponent},
    { path: 'testing', component: TestingComponent },
    { path: 'callback/:param1/:param2', component: CallbackComponent },
  ];
