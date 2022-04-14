import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LandingLayoutComponent } from './layouts/landing-layout/landing-layout.component';

export const AppRoutes: Routes = [
  {
    
      path: '',
      component: LandingLayoutComponent, 
      children: [
          {
        path: '',
        loadChildren:() => import( './layouts/landing-layout/landing-layout.module').then(x => x.LandingLayoutModule)
    }]},
  {
    path: '',
    component: AdminLayoutComponent, 
    children: [
        {
      path:'',
      loadChildren:() => import( './layouts/admin-layout/admin-layout.module').then(x => x.AdminLayoutModule)
  }]},
  {
    path: '**',
    redirectTo: 'dashboard'
  }
]
