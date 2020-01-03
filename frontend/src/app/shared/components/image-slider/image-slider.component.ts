// credits to https://codelabs.developers.google.com/codelabs/angular-slider-element/index.html?index=..%2F..index#0

import { Component, OnInit, ViewEncapsulation, Input} from '@angular/core';
import { IImage } from 'src/app/module/blog/blog.response';
@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ImageSliderComponent implements OnInit {
  transform: number;
  selectedIndex = 0;
  @Input() sliderArray: IImage[];

  constructor() {
    this.sliderArray = [];
    this.selectedIndex = 0;
    this.transform = 100;
  }

  ngOnInit() {
  }

  selected(x) {
    this.downSelected(x);
    this.selectedIndex = x;
   }

   keySelected(x) {
    this.downSelected(x);
    this.selectedIndex = x;
  }

   downSelected(i) {
   this.transform =  100 - (i) * 50;
     this.selectedIndex = this.selectedIndex + 1;
     if (this.selectedIndex > 4) {
       this.selectedIndex = 0;
     }
   }


}
