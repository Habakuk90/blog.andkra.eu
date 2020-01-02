export interface IBaseResponse {
  id: number;
  url: string;
}

export interface IBlogPost extends IBaseResponse {
  title: string;
  description: string;
  updated_at: string;
  created_at: string;
  featured_image: IImage;
  post_dynamic: Array<any>;
}

interface IImage {
  created_at: string;
  ext: string;
  hash: string;
  id: number;
  mime: string;
  name: string;
  url: string;
}

export enum Endpoints {
  BlogPosts = 'blog-posts/',
  BlogCategories = 'blog-categories/'
}
