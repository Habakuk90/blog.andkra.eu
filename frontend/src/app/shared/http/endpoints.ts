export type Endpoint<T extends IBaseEndpoint> = new () => T;


export interface IEndpoint<T extends IBaseEndpoint> {
  new(): T;
  query: string;
}

export interface IBaseEndpoint {
}

export abstract class BaseEndpoint implements IBaseEndpoint {
  abstract route: string;
}

export class BlogPost extends BaseEndpoint {
  public get route(): string {
    return 'blog-posts';
  }
}

export interface IBlogPost {
  id: number;
  title: string;
  description: string;
  updated_at: string;
  created_at: string;
  featured_image: IImage;
  post_dynamic: Array<any>;
}

export class BlogCategory extends BaseEndpoint {
  public get route() {
    return 'blog-categories';
  }

  values: Array<any>;
}

export class EndpointFactory {
  constructor() {}

  create<T extends IBaseEndpoint>(type: Endpoint<T>) {
    // const endpoint =
    return new type();
  }
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
