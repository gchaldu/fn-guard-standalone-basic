import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AccessDeniedPageComponent } from './auth/pages/access-denied-page/access-denied-page.component';
import { AdminPageComponent } from './admin/pages/admin-page/admin-page.component';
import { authGuardFn } from './auth/guard/auth.guard-fn';
import { authGuardFnLogOut } from './auth/guard/auth.guard-fn-logout';
import { AuthPageComponent } from './auth/pages/auth-page/auth-page.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'auth',
    component: AuthPageComponent
  },
  {
    path: 'access-denied',
    component: AccessDeniedPageComponent,
    canActivate: [authGuardFnLogOut]
  },
  {
    path: 'admin',
    component: AdminPageComponent,
    canActivate: [authGuardFn]
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
