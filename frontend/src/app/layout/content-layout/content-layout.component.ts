import { Component, OnInit, ElementRef } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss']
})
export class ContentLayoutComponent implements OnInit {
  apiUrl = environment.strapi_url;
  constructor() { }

  ngOnInit() {
  }
}
