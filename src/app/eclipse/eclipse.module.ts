import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EclipseRoutingModule } from './eclipse-routing.module';
import { EclipseComponent } from './eclipse.component';
import { DesktopNavComponent } from './desktop-nav/desktop-nav.component';
import { MobileNavComponent } from './mobile-nav/mobile-nav.component';


@NgModule({
  declarations: [EclipseComponent, DesktopNavComponent, MobileNavComponent],
  imports: [
    CommonModule,
    EclipseRoutingModule
  ],
  exports:[
    DesktopNavComponent,
    MobileNavComponent
  ]
})
export class EclipseModule { }
