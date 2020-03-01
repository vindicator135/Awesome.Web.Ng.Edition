import { Component, OnInit } from '@angular/core';
import { blogDetailDB } from '../../shared/data/blog/blog-detail/blog-detail'

@Component({
  selector: 'app-home-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  logData = blogDetailDB.Details
  
  constructor() { }

  ngOnInit() {
  }

}
