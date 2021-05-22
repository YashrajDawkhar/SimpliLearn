import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { L7RoutingModule } from './l7-routing.module';
import { L7Component } from './l7.component';
import {PythonModule} from '../python.module';

@NgModule({
  declarations: [L7Component],
  imports: [
    CommonModule,
    L7RoutingModule,
    PythonModule
  ]
})
export class L7Module { }
