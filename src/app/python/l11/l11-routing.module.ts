import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { L11Component } from './l11.component';

const routes: Routes = [{ path: '', component: L11Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class L11RoutingModule { }
