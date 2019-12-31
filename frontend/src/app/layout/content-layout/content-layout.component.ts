import { Component, OnInit, ElementRef } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss']
})
export class ContentLayoutComponent implements OnInit {
  apiUrl = environment.strapi_url;
  constructor(public apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getBlogPosts().subscribe(x => {
      console.log(x);
    });
  }
}
