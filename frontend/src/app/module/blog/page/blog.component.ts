import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { Endpoints } from 'src/app/shared/http/endpoints';
import { Router } from '@angular/router';
import { IBlogPost } from '../blog.response';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  public posts: Array<IBlogPost>;
  constructor(private apiService: ApiService, private router: Router) {
  }

  get(query = '') {
    this.apiService.get<IBlogPost[]>(Endpoints.BlogPosts, query).subscribe(response => {
      this.posts = response.filter(x => !x.draft);
      this.addRouterUrl();
    });
  }

  onCategorySelected(e: string[]) {
    if (e.length < 1) {
      this.get();
    } else {
      const queryKey = 'blog_categories.name';
      let query = '';

      e.forEach(x => {
        query += `${queryKey}=${x}&`;
      });

      this.get(query);
    }
  }

  ngOnInit(): void {
    this.get();
  }

  private addRouterUrl(): void {
    this.posts.forEach(x => x.url = `${this.router.url}/${x.id}`);
  }
}
