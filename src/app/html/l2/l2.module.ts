import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';

import { L2RoutingModule } from './l2-routing.module';
import { L2Component } from './l2.component';
import { HTMLModule } from '../html.module';

@NgModule({
  declarations: [L2Component],
  imports: [
    CommonModule,
    L2RoutingModule,
    HTMLModule
  ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class L2Module { }
