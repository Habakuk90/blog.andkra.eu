import { IImage } from 'src/app/shared/http/response';

export interface IPostDynamicComponent {
  data: IPostDynamic;
}

export interface IPostDynamic {
  __component: string;
  id: number;
}

export interface IPostDynamicImageCollection extends IPostDynamic {
  media: IImage[];
}

export interface IPostDynamicImageSingle extends IPostDynamic {
  media: IImage;
  caption: string;
}

export interface IPostDynamicTextBlock extends IPostDynamic {
  text: string;
}
