import { Component, Input, OnInit } from '@angular/core';
import { IPostDynamicTextBlock, IPostDynamicComponent } from '../post-dynamic';

@Component({
  template: `
    <div class="postDynamic__textBlock" [innerHTML]="data.text">
    </div>
  `,
  styles: ['.postDynamic__textBlock { max-width: 1040px; margin-left: auto; margin-right: auto;}']
})
export class PostDynamicTextBlockComponent implements IPostDynamicComponent, OnInit {

  @Input() data: IPostDynamicTextBlock;

  ngOnInit(): void {

    // FIXME: render markdown => move to backend
    this.data.text = marked(this.data.text);
  }
}
