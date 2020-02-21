import { Component, OnInit } from '@angular/core';
import { blogDetailDB } from '../../shared/data/blog/blog-detail/blog-detail'

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {
  blogData = blogDetailDB.Details

  constructor() { }

  ngOnInit() {
  }

}
