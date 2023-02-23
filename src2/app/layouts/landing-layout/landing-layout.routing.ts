import { Routes } from '@angular/router';


import { LandingComponent } from '../src2/app/pages/landing/landing.component';
import { LoginOptionsComponent } from '../src2/app/pages/landing/login-options/login-options.component';
import { MoneyButtonRedirectComponent } from '../src2/app/pages/landing/moneybutton-redirect/moneybutton-redirect.component';

export const LandingLayoutRoutes: Routes = [
    { path: '', component: LandingComponent},
    { path: 'login', component: LoginOptionsComponent},
    { path: 'redirect', component:MoneyButtonRedirectComponent}
    
];
