import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { L8Component } from './l8.component';

const routes: Routes = [{ path: '', component: L8Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class L8RoutingModule { }
