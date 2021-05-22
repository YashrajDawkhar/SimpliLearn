import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularComponent } from './angular.component';

const routes: Routes = [
  { path: '', component: AngularComponent },
  {
    path: 'L1',
    loadChildren: () => import('./l1/l1.module').then((m) => m.L1Module),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AngularRoutingModule {}
