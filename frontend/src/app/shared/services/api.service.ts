import { HttpClient } from '@angular/common/http';
import { BaseService } from 'src/app/core/services/base.service';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }

  public get apiUrl() {
    return 'http://' + environment.strapi_url;
  }

  // public get<T extends BaseEndpoint, T2 extends IBaseResponse>(type: (Endpoint<T>), query: string = '') {
  //   const factory = new EndpointFactory();
  //   const endpoint = factory.create<T>(type);

  //   return this.http.get<T2[]>(`${this.apiUrl}/${endpoint.route}?${query}`).pipe(map(x => {
  //     x.forEach(y => y.url = `/${endpoint.route}/${y.id}`);
  //     return x;
  //   }));
  // }


  public get<T>(url, query = '') {
    return this.http.get<T>(`${this.apiUrl}/${url}?${query}`).pipe(catchError(super.handleError));
  }
}
