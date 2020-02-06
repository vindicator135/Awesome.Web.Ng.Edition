import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { routes } from './app-routing.module'

import { AppComponent } from './app.component';
import { BlogModule } from './blog/blog.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BlogModule,
    SharedModule,
    RouterModule.forRoot(
      routes, 
      {
        useHash: false, 
        anchorScrolling: 'enabled', 
        scrollPositionRestoration: 'enabled'
      })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
