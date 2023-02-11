import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './containers/layout/layout.component';
import {MaterialModule} from '@angular-redux/material';
import {RouterModule} from '@angular/router';


// Add the MaterialModule and Router Module
// Export the Layout Component out of the module;
@NgModule({
  imports: [CommonModule, MaterialModule, RouterModule],
  declarations: [LayoutComponent],
  exports: [LayoutComponent]
})
export class LayoutModule { }
