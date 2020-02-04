import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [BlogComponent, BlogListComponent],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    BlogComponent, BlogListComponent
  ]
})
export class BlogModule { }
