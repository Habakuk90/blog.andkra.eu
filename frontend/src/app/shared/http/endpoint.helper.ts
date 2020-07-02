import { IBaseResponse, IImage } from './response';
import { environment } from 'src/environments/environment';

export function AddLocalProviderImgUrl<T extends IBaseResponse>(resp): T | T[] {
    if (resp instanceof Array) {
    resp.map((x) => {
      if (x.featured_image && (<IImage>x.featured_image).provider === 'local') {
        x.featured_image.url =
          'http://' + environment.strapi_url + x.featured_image.url;
      }

      return x;
    });
  } else {
    if (resp.featured_image && (<IImage>resp.featured_image).provider === 'local') {
        resp.featured_image.url =
        'http://' + environment.strapi_url + resp.featured_image.url;
    }
  }

  return resp;
}
