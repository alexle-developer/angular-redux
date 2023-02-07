import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';

// @angular-redux = [libs/auth/src/index.ts] in tsconfig.base.json
import {authRoutes, AuthModule} from '@angular-redux/auth';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // for angular animations
    AuthModule,
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
