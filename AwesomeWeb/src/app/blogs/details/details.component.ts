import { Component, OnInit } from '@angular/core';
import { blogDetailDB } from '../../shared/data/blog/blog-detail/blog-detail'

@Component({
  selector: 'app-blog-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class BlogDetailsComponent implements OnInit {
  blogData = blogDetailDB.Details

  constructor() { }

  ngOnInit() {
  }

}
