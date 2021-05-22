import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BootstrapRoutingModule } from './bootstrap-routing.module';
import { BootstrapComponent } from './bootstrap.component';
import { MobileNavComponent } from './mobile-nav/mobile-nav.component';
import { DesktopNavComponent } from './desktop-nav/desktop-nav.component';


@NgModule({
  declarations: [BootstrapComponent, MobileNavComponent, DesktopNavComponent],
  imports: [
    CommonModule,
    BootstrapRoutingModule
  ],
  exports:[
    DesktopNavComponent,
    MobileNavComponent
  ]
})
export class BootstrapModule { }
