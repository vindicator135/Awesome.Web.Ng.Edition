import { Component, OnInit } from '@angular/core';
import { blogDetailDB } from '../../shared/data/blog/blog-detail/blog-detail'
import { HomeDetail } from '../../shared/data/blog/blog-detail/home-detail'

@Component({
  selector: 'app-home-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class HomeDetailsComponent implements OnInit {
  blogData = HomeDetail.getDetail('1');
  
  constructor() { }

  ngOnInit() {
  }
}
