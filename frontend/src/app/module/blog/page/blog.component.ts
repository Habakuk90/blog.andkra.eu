import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {

  constructor() {
  }

  get() {
    // STRAPI: get posts from service here
    console.log('STRAPI: get posts from service here');
  }

  ngOnInit(): void {
    this.get();
  }
}
