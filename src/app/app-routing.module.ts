import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{path:'',redirectTo:'/HTML',pathMatch:'full'},
{ path: 'HTML', loadChildren: () => import('./html/html.module').then(m => m.HTMLModule) }, { path: 'Java', loadChildren: () => import('./java/java.module').then(m => m.JavaModule) }, { path: 'CSS', loadChildren: () => import('./css/css.module').then(m => m.CSSModule) }, { path: 'Bootstrap', loadChildren: () => import('./bootstrap/bootstrap.module').then(m => m.BootstrapModule) }, { path: 'Javascript', loadChildren: () => import('./javascript/javascript.module').then(m => m.JavascriptModule) }, { path: 'Angular', loadChildren: () => import('./angular/angular.module').then(m => m.AngularModule) }, { path: 'Python', loadChildren: () => import('./python/python.module').then(m => m.PythonModule) }, { path: 'Cpp', loadChildren: () => import('./cpp/cpp.module').then(m => m.CppModule) }, { path: 'Vscode', loadChildren: () => import('./vscode/vscode.module').then(m => m.VscodeModule) }, { path: 'Eclipse', loadChildren: () => import('./eclipse/eclipse.module').then(m => m.EclipseModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
