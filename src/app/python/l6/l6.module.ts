import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { L6RoutingModule } from './l6-routing.module';
import { L6Component } from './l6.component';
import {PythonModule} from '../python.module';

@NgModule({
  declarations: [L6Component],
  imports: [
    CommonModule,
    L6RoutingModule,
    PythonModule
  ]
})
export class L6Module { }
