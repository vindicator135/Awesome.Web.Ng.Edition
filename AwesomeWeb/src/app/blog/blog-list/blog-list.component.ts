import { Component, OnInit } from '@angular/core';
import { blogBasicDB } from '../../shared/data/blog/blog-basic/list'

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  public blogData: any
  
  constructor() {
    this.blogData = blogBasicDB.list;
   }

  ngOnInit() {
  }

}
