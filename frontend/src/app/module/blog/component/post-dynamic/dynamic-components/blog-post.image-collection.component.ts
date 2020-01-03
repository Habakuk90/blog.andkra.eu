import { Component, Input } from '@angular/core';
import { IPostDynamicImageCollection, IPostDynamicComponent } from '../post-dynamic';

@Component({
  template: `
      <app-image-slider class="postDynamic__imageCollection" [sliderArray]="data.media"></app-image-slider>
  `
})
export class PostDynamicImageCollectionComponent implements IPostDynamicComponent {
  @Input() data: IPostDynamicImageCollection;
}
