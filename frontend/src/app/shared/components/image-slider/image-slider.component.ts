// credits to https://codelabs.developers.google.com/codelabs/angular-slider-element/index.html?index=..%2F..index#0

import { Component, OnInit, ViewEncapsulation, Input} from '@angular/core';
import { IImage } from '../../http/response';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ImageSliderComponent implements OnInit {
  selectedIndex = 0;
  @Input() sliderArray: IImage[];

  constructor() {
    this.sliderArray = [];
    this.selectedIndex = 0;
  }

  ngOnInit() {
  }

  selected(x) {
    this.selectedIndex = x;
   }

   keySelected(x) {
    this.selectedIndex = x;
  }
}
