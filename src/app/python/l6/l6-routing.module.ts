import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { L6Component } from './l6.component';

const routes: Routes = [{ path: '', component: L6Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class L6RoutingModule { }
