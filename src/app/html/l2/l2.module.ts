import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { L2RoutingModule } from './l2-routing.module';
import { L2Component } from './l2.component';


@NgModule({
  declarations: [L2Component],
  imports: [
    CommonModule,
    L2RoutingModule
  ]
})
export class L2Module { }
