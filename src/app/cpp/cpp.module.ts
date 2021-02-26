import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CppRoutingModule } from './cpp-routing.module';
import { CppComponent } from './cpp.component';


@NgModule({
  declarations: [CppComponent],
  imports: [
    CommonModule,
    CppRoutingModule
  ]
})
export class CppModule { }
