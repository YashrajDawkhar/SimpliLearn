import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HTMLRoutingModule } from './html-routing.module';
import { HTMLComponent } from './html.component';
import { MobileNavComponent } from './mobile-nav/mobile-nav.component';
import { DesktopNavComponent } from './desktop-nav/desktop-nav.component';


@NgModule({
  declarations: [HTMLComponent, MobileNavComponent,DesktopNavComponent],
  imports: [
    CommonModule,
    HTMLRoutingModule,
    
    
  ],
  exports:[
    DesktopNavComponent,
    MobileNavComponent,
    
    
  ]
})
export class HTMLModule {}
