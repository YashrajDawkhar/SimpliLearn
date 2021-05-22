import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JavaRoutingModule } from './java-routing.module';
import { JavaComponent } from './java.component';
import { MobileNavComponent } from './mobile-nav/mobile-nav.component';
import { DesktopNavComponent } from './desktop-nav/desktop-nav.component';


@NgModule({
  declarations: [JavaComponent, MobileNavComponent, DesktopNavComponent],
  imports: [
    CommonModule,
    JavaRoutingModule
  ],
  exports:[
    DesktopNavComponent,
    MobileNavComponent
  ]
})
export class JavaModule { }
