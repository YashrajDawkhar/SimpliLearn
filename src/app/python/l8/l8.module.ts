import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { L8RoutingModule } from './l8-routing.module';
import { L8Component } from './l8.component';
import {PythonModule} from '../python.module';

@NgModule({
  declarations: [L8Component],
  imports: [
    CommonModule,
    L8RoutingModule,
    PythonModule
  ]
})
export class L8Module { }
