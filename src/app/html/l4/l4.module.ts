import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';

import { L4RoutingModule } from './l4-routing.module';
import { L4Component } from './l4.component';
import { HTMLModule } from '../html.module';

@NgModule({
  declarations: [L4Component],
  imports: [
    CommonModule,
    L4RoutingModule,
    HTMLModule
  ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class L4Module { }
