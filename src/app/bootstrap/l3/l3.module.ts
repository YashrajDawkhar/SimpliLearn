import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { L3RoutingModule } from './l3-routing.module';
import { L3Component } from './l3.component';
import { BootstrapModule } from '../bootstrap.module';

@NgModule({
  declarations: [L3Component],
  imports: [
    CommonModule,
    L3RoutingModule,
    BootstrapModule
  ]
})
export class L3Module { }
