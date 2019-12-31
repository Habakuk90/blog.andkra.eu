import { HttpClient } from '@angular/common/http';
import { BaseService } from 'src/app/core/services/base.service';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService extends BaseService {

  constructor(public http: HttpClient, private location: ActivatedRoute) {
    super();
  }

  // protected browse<T extends IBaseResponse>(obj: IEndpoint) {
  //   const url = this.apiUrl + obj.endpoint;
  //   return this.http.get<T>(url, { params: obj.params });
  // }
  public get apiUrl() {
    return 'http://' + environment.strapi_url;
  }

  public getBlogPosts() {
    return this.http.get(`${this.apiUrl}/blog-posts`);
  }
}
