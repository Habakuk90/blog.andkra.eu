import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { IBlogPost, Endpoints } from 'src/app/shared/http/endpoints';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  public posts: Array<IBlogPost>;
  constructor(private apiService: ApiService, private router: Router) {
  }

  get() {
    this.apiService.get<IBlogPost[]>(Endpoints.BlogPosts).subscribe(response => {
      this.posts = response;
      this.posts.forEach(x => x.url = `${this.router.url}/${x.id}`);
    });
  }

  ngOnInit(): void {
    this.get();
  }
}
