import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { L4RoutingModule } from './l4-routing.module';
import { L4Component } from './l4.component';


@NgModule({
  declarations: [L4Component],
  imports: [
    CommonModule,
    L4RoutingModule
  ]
})
export class L4Module { }
