import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { L5Component } from './l5.component';

const routes: Routes = [{ path: '', component: L5Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class L5RoutingModule { }
