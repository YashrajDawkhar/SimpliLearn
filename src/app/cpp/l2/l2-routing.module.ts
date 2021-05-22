import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { L2Component } from './l2.component';

const routes: Routes = [{ path: '', component: L2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class L2RoutingModule { }
