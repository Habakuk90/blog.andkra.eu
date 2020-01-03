import { Component, Input } from '@angular/core';
import { IPostDynamicImageSingle, IPostDynamicComponent } from '../post-dynamic';

@Component({
  template: `
    <div class="postDynamic__imageSingle">
      <div class="m-card__image">
        <img [src]="data.media?.url" alt="">
      </div>
    </div>
  `
})
export class PostDynamicImageSingleComponent implements IPostDynamicComponent {
  @Input() data: IPostDynamicImageSingle;

}
