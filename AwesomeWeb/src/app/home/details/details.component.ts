import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HomeDetail } from '../../shared/data/blog/blog-detail/home-detail'
import { Blog } from 'src/app/shared/data/blog/blog-detail/blog';

@Component({
  selector: 'app-home-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class HomeDetailsComponent implements OnInit {
  blogData : Blog;
  
  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(params => {
      this.blogData = HomeDetail.getDetail(params.get('id'));
    })
  }
}
