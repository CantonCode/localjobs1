import { Routes } from '@angular/router';


import { LandingComponent } from 'app/pages/landing/landing.component';
import { LoginOptionsComponent } from 'app/pages/landing/login-options/login-options.component';

export const LandingLayoutRoutes: Routes = [
    { path: '', component: LandingComponent},
    { path: 'login', component: LoginOptionsComponent},
    
];
