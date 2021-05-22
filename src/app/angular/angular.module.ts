import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularRoutingModule } from './angular-routing.module';
import { AngularComponent } from './angular.component';
import { DesktopNavComponent } from './desktop-nav/desktop-nav.component';
import { MobileNavComponent } from './mobile-nav/mobile-nav.component';


@NgModule({
  declarations: [AngularComponent, DesktopNavComponent, MobileNavComponent],
  imports: [
    CommonModule,
    AngularRoutingModule
    
  ],
  exports:[
    DesktopNavComponent,
    MobileNavComponent
  ]
})
export class AngularModule { }
