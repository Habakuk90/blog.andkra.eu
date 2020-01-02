import { Component, Input } from '@angular/core';
import { IBlogPost } from 'src/app/shared/http/endpoints';

@Component({
  selector: 'app-blog-teaser',
  templateUrl: 'blog-teaser.component.html',
  styleUrls: ['blog-teaser.component.scss']
})
export class BlogTeaserComponent {
  @Input() post: IBlogPost;
  constructor() {
  }
}
