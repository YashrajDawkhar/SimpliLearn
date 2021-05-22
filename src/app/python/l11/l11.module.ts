import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { L11RoutingModule } from './l11-routing.module';
import { L11Component } from './l11.component';
import {PythonModule} from '../python.module';

@NgModule({
  declarations: [L11Component],
  imports: [
    CommonModule,
    L11RoutingModule,
    PythonModule
  ]
})
export class L11Module { }
