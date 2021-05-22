import { NgModule ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { L1RoutingModule } from './l1-routing.module';
import { L1Component } from './l1.component';
import { HTMLModule } from '../html.module';

@NgModule({
  declarations: [L1Component ],
  imports: [
    CommonModule,
    L1RoutingModule,
    HTMLModule
    
  ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
  
})
export class L1Module { 
  
}
