import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PythonRoutingModule } from './python-routing.module';
import { PythonComponent } from './python.component';
import { MobileNavComponent } from './mobile-nav/mobile-nav.component';
import { DesktopNavComponent } from './desktop-nav/desktop-nav.component';


@NgModule({
  declarations: [PythonComponent, MobileNavComponent, DesktopNavComponent],
  imports: [
    CommonModule,
    PythonRoutingModule
  ],
  exports:[
    DesktopNavComponent,
    MobileNavComponent
  ]
})
export class PythonModule { }
