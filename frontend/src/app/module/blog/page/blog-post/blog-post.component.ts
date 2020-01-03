import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ApiService } from 'src/app/shared/services/api.service';
import { Endpoints } from 'src/app/shared/http/endpoints';
import { IBlogPost } from '../../blog.response';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
  url = Endpoints.BlogPosts;
  post: IBlogPost;
  constructor(
    private titleService: Title,
    private apiService: ApiService,
    protected route: ActivatedRoute) { }

  ngOnInit() {
    // MAGICSTRING see blog.routing.ts
    this.route.paramMap.subscribe(x => {
      return this.get(x.get('id'));
    });
  }

  get(slug: string) {
    const that = this;
    that.apiService.get<IBlogPost>(Endpoints.BlogPosts + slug).subscribe(response => {
      this.post = response;
    });
  }
}
