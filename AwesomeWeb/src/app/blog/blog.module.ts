import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { BlogListComponent } from './blog-list/blog-list.component';



@NgModule({
  declarations: [BlogComponent, BlogListComponent],
  imports: [
    CommonModule
  ]
})
export class BlogModule { }
