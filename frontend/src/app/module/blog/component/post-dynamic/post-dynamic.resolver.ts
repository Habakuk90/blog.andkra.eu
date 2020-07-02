import { IPostDynamic, IPostDynamicComponent } from './post-dynamic';
import { Type } from '@angular/core';
import { PostDynamicImageCollectionComponent } from './dynamic-components/blog-post.image-collection.component';
import { PostDynamicTextBlockComponent } from './dynamic-components/blog-post.text-block.component';
import { PostDynamicImageSingleComponent } from './dynamic-components/blog-post.image-single.component';

export class PostDynamicResolver {
  constructor(private componentName: IPostDynamic) {}
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
