import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { L7Component } from './l7.component';

const routes: Routes = [{ path: '', component: L7Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class L7RoutingModule { }
