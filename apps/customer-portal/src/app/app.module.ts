import {LayoutModule} from '@angular-redux/layout';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';

// @angular-redux = [libs/auth/src/index.ts] in tsconfig.base.json
import {authRoutes, AuthModule, AuthGuard} from '@angular-redux/auth';


export const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'products'
  },
  {
    path: 'auth', children: authRoutes
  },
  {
    path: 'products',
    loadChildren: () => import('@angular-redux/products').then((m) => m.ProductsModule),
    canActivate: [AuthGuard],      // added auth guard
  },

];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // for angular animations
    AuthModule,
    LayoutModule,
    RouterModule.forRoot(
      routes,
      {
        initialNavigation: 'enabledBlocking'
      }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
