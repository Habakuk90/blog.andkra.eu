export interface IBaseResponse {
  id: number;
  updated_at: string;
  created_at: string;
}

export interface IImage extends ISimpleImage {
  alternativeText: string;
  caption: string;
  created_at: string;
  formats: {large: ISimpleImage, medium: ISimpleImage, small: ISimpleImage, thumbnail: ISimpleImage};

  height: number;
  id: number;
  name: string;
  previewUrl: string;
  provider: string;
  provider_metadata: string;
  updated_at: string;
}

interface ISimpleImage { // simple media
  ext: string;
  hash: string;
  mime: string;
  path: string;

  url: string;
  size: number;
  height: number;
  width: number;
}

export interface ILink {
  id: number;
  name: string;
  url: string;
  icon_class: string;
}

export interface IBasePageResponse extends IBaseResponse {
  Page: IBasePage;
}

interface IBasePage extends IBasePageResponse {
  title: string;
}
