import { Component, OnInit } from '@angular/core';
import { BlogDetails } from '../../shared/data/blog/blog-detail/blog-detail'
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/shared/data/blog/blog-detail/blog';

@Component({
  selector: 'app-blog-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class BlogDetailsComponent implements OnInit {
  blogData: Blog;

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(params => {
      this.blogData = BlogDetails.getDetail(params.get('id'));
    })
  }

}
