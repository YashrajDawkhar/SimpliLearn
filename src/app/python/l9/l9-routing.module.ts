import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { L9Component } from './l9.component';

const routes: Routes = [{ path: '', component: L9Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class L9RoutingModule { }
