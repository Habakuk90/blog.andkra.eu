import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ApiService } from 'src/app/shared/services/api.service';
import { Endpoints } from 'src/app/shared/http/endpoints';
import { IBlogPost } from '../../blog.response';
import { AddLocalProviderImgUrl } from 'src/app/shared/http/endpoint.helper';
import { map } from 'rxjs/operators';

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
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // MAGICSTRING see blog.routing.ts
    this.route.paramMap.subscribe(x => {
      return this.get(x.get('id'));
    });
  }

  get(slug: string) {
    const that = this;

    that.apiService
      .get<IBlogPost>(Endpoints.BlogPosts + slug)
      .pipe(map(AddLocalProviderImgUrl))
      .subscribe(response => {
        const castResponse = <IBlogPost>response;
        if (castResponse.draft) {
          this.router.navigate(['/blog']);
        }
        this.post = castResponse;
        this.titleService.setTitle(castResponse.title);
      });
  }
}
