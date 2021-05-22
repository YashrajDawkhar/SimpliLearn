import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { L10Component } from './l10.component';

const routes: Routes = [{ path: '', component: L10Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class L10RoutingModule { }
