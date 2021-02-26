import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HTMLComponent } from './html.component';

const routes: Routes = [{ path: '', component: HTMLComponent }, { path: 'L1', loadChildren: () => import('./l1/l1.module').then(m => m.L1Module) }, { path: 'L2', loadChildren: () => import('./l2/l2.module').then(m => m.L2Module) }, { path: 'L3', loadChildren: () => import('./l3/l3.module').then(m => m.L3Module) }, { path: 'L4', loadChildren: () => import('./l4/l4.module').then(m => m.L4Module) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HTMLRoutingModule { }
