import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JavascriptRoutingModule } from './javascript-routing.module';
import { JavascriptComponent } from './javascript.component';
import { DesktopNavComponent } from './desktop-nav/desktop-nav.component';
import { MobileNavComponent } from './mobile-nav/mobile-nav.component';


@NgModule({
  declarations: [JavascriptComponent, DesktopNavComponent, MobileNavComponent],
  imports: [
    CommonModule,
    JavascriptRoutingModule
  ],
  exports:[
    DesktopNavComponent,
    MobileNavComponent
  ]
})
export class JavascriptModule { }
