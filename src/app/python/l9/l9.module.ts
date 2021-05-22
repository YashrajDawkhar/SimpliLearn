import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { L9RoutingModule } from './l9-routing.module';
import { L9Component } from './l9.component';
import {PythonModule} from '../python.module';

@NgModule({
  declarations: [L9Component],
  imports: [
    CommonModule,
    L9RoutingModule,
    PythonModule
  ]
})
export class L9Module { }
