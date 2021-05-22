import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CSSRoutingModule } from './css-routing.module';
import { CSSComponent } from './css.component';
import { MobileNavComponent } from './mobile-nav/mobile-nav.component';
import { DesktopNavComponent } from './desktop-nav/desktop-nav.component';


@NgModule({
  declarations: [CSSComponent, MobileNavComponent, DesktopNavComponent],
  imports: [
    CommonModule,
    CSSRoutingModule
  ],
  exports:[
    DesktopNavComponent,
    MobileNavComponent,
    
  ]
})
export class CSSModule { }
