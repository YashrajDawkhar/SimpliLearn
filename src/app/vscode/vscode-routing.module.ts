import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VscodeComponent } from './vscode.component';

const routes: Routes = [{ path: '', component: VscodeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VscodeRoutingModule { }
