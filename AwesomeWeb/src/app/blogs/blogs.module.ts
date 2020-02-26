import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BlogComponent } from './blogs.component';
import { BlogListComponent } from './list/list.component';
import { BlogDetailsComponent } from './details/details.component';
import { BlogRoutingModule } from './blogs-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [BlogComponent, BlogListComponent, BlogDetailsComponent],
  imports: [
    CommonModule,
    NgbModule,
    BlogRoutingModule,
    SharedModule
  ],
  exports: [
    BlogComponent, BlogListComponent, BlogDetailsComponent
  ]
})
export class BlogModule { }
