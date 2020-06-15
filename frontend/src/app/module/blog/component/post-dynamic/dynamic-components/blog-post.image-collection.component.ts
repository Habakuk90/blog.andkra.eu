import { Component, Input, OnInit } from '@angular/core';
import { IPostDynamicImageCollection, IPostDynamicComponent } from '../post-dynamic';
import { environment } from 'src/environments/environment';

@Component({
  template: `
      <app-image-slider class="postDynamic__imageCollection" [sliderArray]="data.media"></app-image-slider>
  `
})
export class PostDynamicImageCollectionComponent implements IPostDynamicComponent, OnInit {
  @Input() data: IPostDynamicImageCollection;


  ngOnInit(): void {
    this.data.media
      .map(media => {
          if (media.provider === 'local') {
            return media.url = 'http://' + environment.strapi_url + media.url;
          }
          return media;
        });
  }
}
