import { NgModule } from '@angular/core';
import { BlogComponent } from './page/blog.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BlogRoutingModule } from './blog.routing';
import { BlogTeaserComponent } from './component/blog-teaser/blog-teaser.component';
import { BlogPostComponent } from './page/blog-post/blog-post.component';
@NgModule({
  declarations: [
    BlogComponent,
    BlogTeaserComponent,
    BlogPostComponent
  ],
  imports: [
    SharedModule,

    BlogRoutingModule
  ],
  exports: [],
  providers: [],
})
export class BlogModule { }
