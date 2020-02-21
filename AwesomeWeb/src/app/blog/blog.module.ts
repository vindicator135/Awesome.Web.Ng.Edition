import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BlogComponent } from './blog.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogRoutingModule } from './blog-routing.module';
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
