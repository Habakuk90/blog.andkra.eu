import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { Endpoints } from 'src/app/shared/http/endpoints';
import { IBlogPost, IBlogCategories } from '../../blog.response';

@Component({
  selector: 'app-blog-categories',
  templateUrl: 'blog-categories.component.html',
  styleUrls: ['blog-categories.component.scss']
})
export class BlogCategoriesComponent implements OnInit {
  categories: IBlogCategories[];
  @Output() categorySelected: EventEmitter<IBlogPost[]> = new EventEmitter<IBlogPost[]>();


  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.get<IBlogCategories[]>(Endpoints.BlogCategories)
      .subscribe(x => this.categories = x);
  }

  onCategoryClick(e: IBlogCategories) {
    e.selected = !e.selected;

    const selectedCategorys = this.categories.filter(x => x.selected);
    let arr: IBlogPost[][];
    let blogPosts = [];

    if (selectedCategorys.length < 1) {
      arr = this.categories.map(x => x.blog_posts);
    } else {
      arr = selectedCategorys.map(x => x.blog_posts);
    }

    for (let i = 0; i < arr.length; i++) {
      blogPosts = blogPosts.concat(arr[i]);
      blogPosts.sort((a, b) => {
        return a.created_at > b.created_at ? 1 : 0;
      });
    }

    this.categorySelected.emit(blogPosts);
  }
}
