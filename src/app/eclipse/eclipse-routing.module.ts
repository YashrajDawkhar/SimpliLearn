import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EclipseComponent } from './eclipse.component';

const routes: Routes = [{ path: '', component: EclipseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EclipseRoutingModule { }
