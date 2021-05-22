import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { L2RoutingModule } from './l2-routing.module';
import { L2Component } from './l2.component';
import {EclipseModule} from '../eclipse.module';

@NgModule({
  declarations: [L2Component],
  imports: [
    CommonModule,
    L2RoutingModule,
    EclipseModule
  ]
})
export class L2Module { }
