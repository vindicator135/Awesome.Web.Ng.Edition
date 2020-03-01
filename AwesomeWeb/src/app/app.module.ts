import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { routes } from './app-routing.module'

import { AppComponent } from './app.component';
import { BlogModule } from './blogs/blogs.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BlogModule,
    HomeModule,
    SharedModule,
    RouterModule.forRoot(
      routes, 
      {
        useHash: false, 
        anchorScrolling: 'enabled', 
        scrollPositionRestoration: 'enabled',
        enableTracing: true
      })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
