import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LandingLayoutRoutes } from './landing-layout.routing';


import { LandingComponent } from '../src2/app/pages/landing/landing.component';
import { LoginOptionsComponent } from '../src2/app/pages/landing/login-options/login-options.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MoneyButtonRedirectComponent } from '../src2/app/pages/landing/moneybutton-redirect/moneybutton-redirect.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LandingLayoutRoutes),
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  declarations: [
    LandingComponent,
    LoginOptionsComponent,
    MoneyButtonRedirectComponent
  ]
})

export class LandingLayoutModule {}
