import { IPostDynamic } from './component/post-dynamic/post-dynamic';

export interface IBaseResponse {
  id: number;
  url: string;
  updated_at: string;
  created_at: string;
}

export interface IBlogPost extends IBaseResponse {
  title: string;
  description: string;
  featured_image: IImage;
  post_dynamic: Array<IPostDynamic>;
  blog_categories: IBlogCategories[];
}

export interface IBlogCategories extends IBaseResponse {
  blog_posts: IBlogPost[];
  name: string;
  selected: boolean;
}

export interface IImage {
  created_at: string;
  ext: string;
  hash: string;
  id: number;
  mime: string;
  name: string;
  url: string;
}
