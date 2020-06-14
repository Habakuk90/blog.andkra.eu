import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { INavigation } from './header.response';
import { Endpoints } from 'src/app/shared/http/endpoints';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  navigation: INavigation;
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService
      .get<INavigation>(`${Endpoints.Navigation}`)
      .subscribe((response) => {
        this.navigation = response;
      });
  }
}
