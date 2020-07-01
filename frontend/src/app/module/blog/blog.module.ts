import { NgModule } from '@angular/core';
import { BlogComponent } from './page/blog.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BlogRoutingModule } from './blog.routing';
import { BlogTeaserComponent } from './component/blog-teaser/blog-teaser.component';
import { BlogPostComponent } from './page/blog-post/blog-post.component';
import { PostDynamicDirective } from './component/post-dynamic/post-dynamic.directive';
import { PostDynamicComponent } from './component/post-dynamic/post-dynamic.component';
import { PostDynamicImageCollectionComponent } from './component/post-dynamic/dynamic-components/blog-post.image-collection.component';
import { PostDynamicImageSingleComponent } from './component/post-dynamic/dynamic-components/blog-post.image-single.component';
import { PostDynamicTextBlockComponent } from './component/post-dynamic/dynamic-components/blog-post.text-block.component';
import { BlogCategoriesComponent } from './component/blog-categories/blog-categories.component';

@NgModule({
  declarations: [
    BlogComponent,
    BlogTeaserComponent,
    BlogPostComponent,
    BlogCategoriesComponent,
    PostDynamicComponent,
    PostDynamicDirective,
    PostDynamicImageCollectionComponent,
    PostDynamicImageSingleComponent,
    PostDynamicTextBlockComponent
  ],
  imports: [
    SharedModule,

    BlogRoutingModule
  ],
  exports: [],
  providers: [],
  // entryComponents: [
  //   PostDynamicImageSingleComponent,
  //   PostDynamicImageCollectionComponent,
  //   PostDynamicTextBlockComponent
  // ]
})
export class BlogModule { }
