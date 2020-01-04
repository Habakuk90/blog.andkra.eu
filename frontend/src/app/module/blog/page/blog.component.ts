import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { Endpoints } from 'src/app/shared/http/endpoints';
import { Router } from '@angular/router';
import { IBlogPost, IBlogCategories } from '../blog.response';

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
      this.addRouterUrl();
    });
  }

  onCategorySelected(e) {
    this.posts = e;
    this.addRouterUrl();
  }

  ngOnInit(): void {
    this.get();
  }

  private addRouterUrl(): void {
    this.posts.forEach(x => x.url = `${this.router.url}/${x.id}`);
  }
}
