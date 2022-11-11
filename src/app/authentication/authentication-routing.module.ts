import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthenticationComponent } from './components/authentication.component';
import { LoginComponent } from './components/login/login.component';

/**
 * Authentication module routes
 */
const routes: Routes = [
  {
    component: AuthenticationComponent,
    path: '',
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
    ],
  },
];

/**
 * Provides Authentication module router
 */
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      relativeLinkResolution: 'legacy',
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
