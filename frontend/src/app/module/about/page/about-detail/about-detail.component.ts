import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ApiService } from 'src/app/shared/services/api.service';
import { Endpoints } from 'src/app/shared/http/endpoints';
import { IAboutDetailPage } from '../../about.response';

@Component({
  selector: 'app-about-detail',
  templateUrl: './about-detail.component.html',
  styleUrls: ['./about-detail.component.scss']
})
export class AboutDetailComponent implements OnInit {
  @Input() details: IAboutDetailPage;

  constructor(
    private titleService: Title,
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // MAGICSTRING see about.routing.ts
    this.route.paramMap.subscribe(x => {
      return this.get(x.get('id'));
    });
  }

  get(slug: string) {
    const that = this;
    that.apiService.get<IAboutDetailPage>(Endpoints.AboutDetail + slug).subscribe(response => {

      this.titleService.setTitle(response.title);
    });
  }
}
