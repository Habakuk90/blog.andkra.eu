import { Component, OnDestroy, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  title: string;
  house = {
    url: '../../../../assets/svg/house_full.svg',
    zoom: false
  };
  constructor() {}

  ngOnInit() {
  }

  ngOnDestroy() {
    // fix me, have to call it in every HubCompone
  }


  ngAfterViewInit() {

    setTimeout(() => {
      this.house.zoom = true;

    }, 200);

  }
}
