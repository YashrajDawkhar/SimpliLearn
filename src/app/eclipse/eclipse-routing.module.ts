import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EclipseComponent } from './eclipse.component';

const routes: Routes = [{ path: '', component: EclipseComponent }, { path: 'L1', loadChildren: () => import('./l1/l1.module').then(m => m.L1Module) }, { path: 'L2', loadChildren: () => import('./l2/l2.module').then(m => m.L2Module) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EclipseRoutingModule { }
