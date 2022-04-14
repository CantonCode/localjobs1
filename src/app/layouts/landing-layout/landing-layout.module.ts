import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LandingLayoutRoutes } from './landing-layout.routing';


import { LandingComponent } from 'app/pages/landing/landing.component';
import { LoginOptionsComponent } from 'app/pages/landing/login-options/login-options.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LandingLayoutRoutes),
    FormsModule,
    NgbModule
  ],
  declarations: [
    LandingComponent,
    LoginOptionsComponent
  ]
})

export class LandingLayoutModule {}
