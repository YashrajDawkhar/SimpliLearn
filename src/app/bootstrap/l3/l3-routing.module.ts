import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { L3Component } from './l3.component';

const routes: Routes = [{ path: '', component: L3Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class L3RoutingModule { }
