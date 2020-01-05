import { IPostDynamic } from './component/post-dynamic/post-dynamic';
import { IBaseResponse, IImage } from 'src/app/shared/http/response';

export interface IBlogPost extends IBaseResponse {
  title: string;
  url: string;
  description: string;
  featured_image: IImage;
  post_dynamic: IPostDynamic[];
  blog_categories: IBlogCategories[];
}

export interface IBlogCategories extends IBaseResponse {
  blog_posts: IBlogPost[];
  name: string;
  selected: boolean;
}
