import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { L1RoutingModule } from './l1-routing.module';
import { L1Component } from './l1.component';
import {EclipseModule} from '../eclipse.module';

@NgModule({
  declarations: [L1Component],
  imports: [
    CommonModule,
    L1RoutingModule,
    EclipseModule
  ]
})
export class L1Module { }
