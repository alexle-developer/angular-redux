import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Route} from '@angular/router';
import {LoginComponent} from './containers/login/login.component';
import {LoginFormComponent} from './components/login-form/login-form.component';
import {MaterialModule} from '@angular-redux/material';
import {ReactiveFormsModule} from '@angular/forms';

// authRoutes is also exported in the lib.routes.ts
// therefore, we commented it out in the libs\auth\src\index.ts
export const authRoutes: Route[] = [
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [LoginComponent, LoginFormComponent],
})
export class AuthModule { }
