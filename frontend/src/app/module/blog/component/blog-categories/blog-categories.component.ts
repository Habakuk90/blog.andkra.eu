import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { Endpoints } from 'src/app/shared/http/endpoints';
import { IBlogPost, IBlogCategories } from '../../blog.response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-categories',
  templateUrl: 'blog-categories.component.html',
  styleUrls: ['blog-categories.component.scss']
})
export class BlogCategoriesComponent implements OnInit {
  categories: IBlogCategories[];
  selectedCategories: string[] = [];
  @Output() categorySelected: EventEmitter<string[]> = new EventEmitter<string[]>();

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.get<IBlogCategories[]>(Endpoints.BlogCategories)
      .subscribe(x => this.categories = x);
  }

  onCategoryClick(e: IBlogCategories) {
    e.selected = !e.selected;
    if (e.selected) {
      this.selectedCategories.push(e.name);
    } else {
      this.selectedCategories = this.selectedCategories.filter(x => x !== e.name);
    }

    this.categorySelected.emit(this.selectedCategories);
  }
}
