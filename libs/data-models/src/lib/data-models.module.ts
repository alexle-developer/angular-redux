import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// Re-Export Interface
export {Authenticate} from './authenticate';
export {User} from './user';

@NgModule({
  imports: [CommonModule],
})
export class DataModelsModule { }
