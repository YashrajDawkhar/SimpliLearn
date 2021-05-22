import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';

import { L3RoutingModule } from './l3-routing.module';
import { L3Component } from './l3.component';
import { HTMLModule } from '../html.module';

@NgModule({
  declarations: [L3Component],
  imports: [
    CommonModule,
    L3RoutingModule,
    HTMLModule
  ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class L3Module { }
