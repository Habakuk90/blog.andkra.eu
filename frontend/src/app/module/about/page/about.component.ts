import { Component, OnDestroy, OnInit } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger,
  group,
  sequence,
  useAnimation,
  // ...
} from '@angular/animations';
import { ApiService } from 'src/app/shared/services/api.service';
import { Endpoints } from 'src/app/shared/http/endpoints';
import { IAboutDetailPage } from '../about.response';
import { carouselAnimation, slideTo, sliderIncrement, carouselTransition } from '../carousel.animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  // animations: [
  //   trigger('slide',[ transition(sliderIncrement, carouselTransition) ])
  // ]
})
export class AboutComponent implements OnInit, OnDestroy {
  constructor(private api: ApiService) {}

  title: string;
  aboutDetails: IAboutDetailPage[] = [];
  slideIndex = 0;

  axisZ = 0;
  axisX = 0;

  carouselAngle = 0;

  radius = 0;
  alpha: number;

  ngOnInit() {
    // this.slug$ = this.route.paramMap.pipe(map(params => (params.get('slug'))));
    // this.slug$.pipe(take(1)).subscribe(slug => this.get());

    this.api.get<IAboutDetailPage[]>(Endpoints.AboutDetail).subscribe(
      (x) => (this.aboutDetails = x),
      (error) => {
        console.log(error);
        // this.aboutDetails.push(
        //   {
        //     id: 0,
        //     title: '1200x720',
        //     created_at: 'today',
        //     updated_at: 'today',
        //     logo: { url: 'https://via.placeholder.com/2000x1240' },
        //   },
        //   {
        //     id: 1,
        //     title: '250x',
        //     created_at: 'today',
        //     updated_at: 'today',
        //     logo: { url: 'https://via.placeholder.com/250x250' },
        //   },
        //   {
        //     id: 2,
        //     title: '2860x123',
        //     created_at: 'today',
        //     updated_at: 'today',
        //     logo: { url: 'https://via.placeholder.com/100x100' },
        //   },
        //   {
        //     id: 3,
        //     title: '2860x123',
        //     created_at: 'today',
        //     updated_at: 'today',
        //     logo: { url: 'https://via.placeholder.com/100x100' },
        //   },
        //   {
        //     id: 4,
        //     title: '2860x123',
        //     created_at: 'today',
        //     updated_at: 'today',
        //     logo: { url: 'https://via.placeholder.com/100x100' },
        //   }
        // );

        this.changeCarousel();
      }
    );
  }

  get(): void {
    const that = this;
  }
  next() {
    this.slideIndex++;
    this.carouselAngle = this.alpha * this.slideIndex;

  }

  prev() {
    this.slideIndex--;
    this.carouselAngle = this.alpha * this.slideIndex;
  }
  rotateX3D(theta) {
    const sinTheta = Math.sin(theta);
    const cosTheta = Math.cos(theta);
    const y  = 0;
    const z = 0;
      this.axisZ =  y * cosTheta - z * sinTheta;
      this.axisX = z * cosTheta + y * sinTheta;
 }  slide(event: Event) {
    const isRight = (event.target as HTMLElement).classList.contains('right');
    const length = this.aboutDetails.length;
    if (isRight) {
      this.slideIndex + 1 >= length ? (this.slideIndex = 0) : this.slideIndex++;
    } else {
      this.slideIndex <= 0 ? (this.slideIndex = length - 1) : this.slideIndex--;
    }
  }

  changeCarousel() {
    this.alpha = 360 / this.aboutDetails.length;
    const cellSize = (<HTMLElement>document.querySelector('.carouselContainer'))
      .offsetWidth;

    this.radius = Math.round(
      cellSize / 2 / Math.tan(Math.PI / this.aboutDetails.length)
    );
  }

  ngOnDestroy() {
    // fix me, have to call it in every HubComponent
  }

  registerOnMethods() {}
}
