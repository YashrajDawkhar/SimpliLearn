import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PythonComponent } from './python.component';

const routes: Routes = [{ path: '', component: PythonComponent }, { path: 'L1', loadChildren: () => import('./l1/l1.module').then(m => m.L1Module) }, { path: 'L2', loadChildren: () => import('./l2/l2.module').then(m => m.L2Module) }, { path: 'L3', loadChildren: () => import('./l3/l3.module').then(m => m.L3Module) }, { path: 'L4', loadChildren: () => import('./l4/l4.module').then(m => m.L4Module) }, { path: 'L5', loadChildren: () => import('./l5/l5.module').then(m => m.L5Module) }, { path: 'L6', loadChildren: () => import('./l6/l6.module').then(m => m.L6Module) }, { path: 'L7', loadChildren: () => import('./l7/l7.module').then(m => m.L7Module) }, { path: 'L8', loadChildren: () => import('./l8/l8.module').then(m => m.L8Module) }, { path: 'L9', loadChildren: () => import('./l9/l9.module').then(m => m.L9Module) }, { path: 'L10', loadChildren: () => import('./l10/l10.module').then(m => m.L10Module) }, { path: 'L11', loadChildren: () => import('./l11/l11.module').then(m => m.L11Module) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PythonRoutingModule { }
