import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { throwIfAlreadyLoaded } from './guard/module-import.guard';
// import { LoaderInterceptor } from '../shared/http/loader.interceptor';


@NgModule({
  imports: [
    HttpClientModule,
  ],
  exports: [
  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
