import { Component, Input, OnInit } from '@angular/core';
import { IPostDynamicTextBlock, IPostDynamicComponent } from '../post-dynamic';

@Component({
  template: `
    <div class="postDynamic__textBlock" [innerHTML]="data.text">
    </div>
  `
})
export class PostDynamicTextBlockComponent implements IPostDynamicComponent, OnInit {

  @Input() data: IPostDynamicTextBlock;

  ngOnInit(): void {

    // FIXME: render markdown => move to backend
    this.data.text = marked(this.data.text);
  }
}
