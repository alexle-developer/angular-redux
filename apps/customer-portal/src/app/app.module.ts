import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';

// @angular-redux = [libs/auth/src/index.ts] in tsconfig.base.json
import {authRoutes, AuthModule} from '@angular-redux/auth';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    // added module
    AuthModule,
    //added path
    RouterModule.forRoot(
      [
        {path: 'auth', children: authRoutes}
      ],
      {initialNavigation: 'enabledBlocking'}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
