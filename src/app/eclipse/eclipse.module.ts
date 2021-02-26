import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EclipseRoutingModule } from './eclipse-routing.module';
import { EclipseComponent } from './eclipse.component';


@NgModule({
  declarations: [EclipseComponent],
  imports: [
    CommonModule,
    EclipseRoutingModule
  ]
})
export class EclipseModule { }
