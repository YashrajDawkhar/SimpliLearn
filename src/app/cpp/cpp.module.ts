import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CppRoutingModule } from './cpp-routing.module';
import { CppComponent } from './cpp.component';
import { DesktopNavComponent } from './desktop-nav/desktop-nav.component';
import { MobileNavComponent } from './mobile-nav/mobile-nav.component';


@NgModule({
  declarations: [CppComponent, DesktopNavComponent, MobileNavComponent],
  imports: [
    CommonModule,
    CppRoutingModule
  ],
  exports:[
    DesktopNavComponent,
    MobileNavComponent
  ]
})
export class CppModule { }
