import { HttpClient } from '@angular/common/http';
import { BaseService } from 'src/app/core/services/base.service';
import { environment } from 'src/environments/environment';

export class ApiService extends BaseService {

  public get apiUrl() {
    throw new Error('no url given');
    // STRAPI: strapi url here
    return;
  }
  constructor(public http: HttpClient) {
    super();
  }

  // protected browse<T extends IBaseResponse>(obj: IEndpoint) {
  //   const url = this.apiUrl + obj.endpoint;
  //   return this.http.get<T>(url, { params: obj.params });
  // }
}
