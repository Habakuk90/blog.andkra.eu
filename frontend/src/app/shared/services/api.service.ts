import { HttpClient } from '@angular/common/http';
import { BaseService } from 'src/app/core/services/base.service';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Endpoint, EndpointFactory, BaseEndpoint } from 'src/app/shared/http/endpoints';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService extends BaseService {

  constructor(public http: HttpClient) {
    super();
  }

  public get apiUrl() {
    return 'http://' + environment.strapi_url;
  }

  public get<T extends BaseEndpoint>(type: (Endpoint<T>), query: string = '') {
    const factory = new EndpointFactory();
    const endpoint = factory.create(type);

    return this.http.get(`${this.apiUrl}/${endpoint.route}?${query}`)
      .pipe(map(x => {
        return x = x as any;
      }));
  }
}
