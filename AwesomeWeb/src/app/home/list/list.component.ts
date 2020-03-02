import { Component, OnInit } from '@angular/core';
import { HomeDetail } from '../../shared/data/blog/blog-detail/home-detail'

@Component({
  selector: 'app-home-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class HomeListComponent implements OnInit {
  blogData = HomeDetail.Details

  constructor() { }

  ngOnInit() {
  }

}
