import { Component, Input } from '@angular/core';
import { IPostDynamicImageSingle, IPostDynamicComponent } from '../post-dynamic';

@Component({
  template: `
    <div class="postDynamic__image">
      <img [src]="data.media?.url" alt="{{data.caption}}">
    </div>
  `,
  styleUrls: ['../post-dynamic.component.scss']
})
export class PostDynamicImageSingleComponent implements IPostDynamicComponent {
  @Input() data: IPostDynamicImageSingle;

}
