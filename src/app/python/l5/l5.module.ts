import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { L5RoutingModule } from './l5-routing.module';
import { L5Component } from './l5.component';
import {PythonModule} from '../python.module';

@NgModule({
  declarations: [L5Component],
  imports: [
    CommonModule,
    L5RoutingModule,
    PythonModule
  ]
})
export class L5Module { }
