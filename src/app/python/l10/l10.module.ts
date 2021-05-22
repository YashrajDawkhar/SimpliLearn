import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { L10RoutingModule } from './l10-routing.module';
import { L10Component } from './l10.component';
import {PythonModule} from '../python.module';

@NgModule({
  declarations: [L10Component],
  imports: [
    CommonModule,
    L10RoutingModule,
    PythonModule
  ]
})
export class L10Module { }
