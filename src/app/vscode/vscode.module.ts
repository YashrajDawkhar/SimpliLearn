import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VscodeRoutingModule } from './vscode-routing.module';
import { VscodeComponent } from './vscode.component';


@NgModule({
  declarations: [VscodeComponent],
  imports: [
    CommonModule,
    VscodeRoutingModule
  ]
})
export class VscodeModule { }
