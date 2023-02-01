import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Route} from '@angular/router';
import {LoginComponent} from './containers/login/login.component';
import {LoginFormComponent} from './components/login-form/login-form.component';

// authRoutes is also exported in the lib.routes.ts
// therefore, we commented it out in the libs\auth\src\index.ts
export const authRoutes: Route[] = [
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [LoginComponent, LoginFormComponent],
})
export class AuthModule { }
