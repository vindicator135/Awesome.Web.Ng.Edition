import { Component, OnInit } from '@angular/core';
import { blogBasicDB } from '../../shared/data/blog/blog-basic/list'

@Component({
  selector: 'app-blog-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class BlogListComponent implements OnInit {

  public blogData: any
  
  constructor() {
    this.blogData = blogBasicDB.list;
   }

  ngOnInit() {
  }

}
