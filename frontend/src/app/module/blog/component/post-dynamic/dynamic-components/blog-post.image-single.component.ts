import { Component, Input, OnInit } from '@angular/core';
import { IPostDynamicImageSingle, IPostDynamicComponent } from '../post-dynamic';
import { environment } from 'src/environments/environment';

@Component({
  template: `
    <div class="postDynamic__image">
      <img [src]="data.media?.url" alt="{{data.caption}}">
    </div>
  `,
  styleUrls: ['../post-dynamic.component.scss']
})
export class PostDynamicImageSingleComponent implements IPostDynamicComponent, OnInit {
  @Input() data: IPostDynamicImageSingle;


  ngOnInit(): void {
    if (this.data.media.provider === 'local') {
      this.data.media.url = 'http://' + environment.strapi_url + this.data.media.url;
    }
  }
}
