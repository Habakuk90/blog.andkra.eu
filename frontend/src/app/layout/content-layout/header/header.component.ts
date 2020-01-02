import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  public navigation: any = [
    {
      url: '/',
      label: 'home'
    },
    {
      url: '/blog',
      label: 'blog'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
  }
}
