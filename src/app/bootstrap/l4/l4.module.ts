import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { L4RoutingModule } from './l4-routing.module';
import { L4Component } from './l4.component';
import { BootstrapModule } from '../bootstrap.module';

@NgModule({
  declarations: [L4Component],
  imports: [
    CommonModule,
    L4RoutingModule,
    BootstrapModule
  ]
})
export class L4Module { }
