import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { GoToTopComponent } from './go-to-top/go-to-top.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {MenuComponent} from './menu/menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    GoToTopComponent,
    MenuComponent,
    PageNotFoundComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoadingBarRouterModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
