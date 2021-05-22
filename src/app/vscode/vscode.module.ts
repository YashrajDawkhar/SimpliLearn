import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VscodeRoutingModule } from './vscode-routing.module';
import { VscodeComponent } from './vscode.component';
import { DesktopNavComponent } from './desktop-nav/desktop-nav.component';
import { MobileNavComponent } from './mobile-nav/mobile-nav.component';


@NgModule({
  declarations: [VscodeComponent, DesktopNavComponent, MobileNavComponent],
  imports: [
    CommonModule,
    VscodeRoutingModule
  ],
  exports:[
    DesktopNavComponent,
    MobileNavComponent
  ]
})
export class VscodeModule { }
