import { PostDynamicImageCollectionComponent } from './dynamic-components/blog-post.image-collection.component';
import { PostDynamicTextBlockComponent } from './dynamic-components/blog-post.text-block.component';
import { PostDynamicImageSingleComponent } from './dynamic-components/blog-post.image-single.component';
import { Type } from '@angular/core';
import { IImage } from '../../blog.response';

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
}

export interface IPostDynamicTextBlock extends IPostDynamic {
  text: string;
}

export class PostDynamicResolver {
  constructor(private componentName: IPostDynamic) { }
  getComponent(): Type<IPostDynamicComponent> {
    switch (this.componentName.__component) {
      case 'blog-post.image-collection':
        return PostDynamicImageCollectionComponent;
      case 'blog-post.text-block':
        return PostDynamicTextBlockComponent;
      case 'blog-post.image-single':
        return PostDynamicImageSingleComponent;
      default:
        break;
    }
  }
}
