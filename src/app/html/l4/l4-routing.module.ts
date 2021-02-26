import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { L4Component } from './l4.component';

const routes: Routes = [{ path: '', component: L4Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class L4RoutingModule { }
