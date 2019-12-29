import { Component, OnInit, Input, OnDestroy, HostListener, ElementRef } from '@angular/core';

interface ScrollEvent extends Event {
  pageY: number; pageX: number;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  public navigation: any = [
    {
      url: '#',
      label: 'home'
    },
    {
      url: '/blog',
      label: 'blog'
    }
  ];
  constructor(private element: ElementRef) { }

  ngOnInit() {
  }

  ngOnDestroy() {
  }
}
