import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CppComponent } from './cpp.component';

const routes: Routes = [{ path: '', component: CppComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CppRoutingModule { }
