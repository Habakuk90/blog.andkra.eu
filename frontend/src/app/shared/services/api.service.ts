import { HttpClient } from '@angular/common/http';
import { BaseService } from 'src/app/core/services/base.service';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService extends BaseService {
  constructor(private http: HttpClient) {
    super();
  }

  public get apiUrl() {
    const scheme = environment.production ? 'https://' : 'http://';

    return scheme + environment.strapi_url;
  }

  public get<T>(url, query = '') {
    return this.http
      .get<T>(`${this.apiUrl}/${url}?${query}`)
      .pipe(catchError(super.handleError));
  }
}
