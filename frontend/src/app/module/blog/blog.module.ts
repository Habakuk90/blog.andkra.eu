import { NgModule } from '@angular/core';
import { BlogComponent } from './page/blog.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BlogRoutingModule } from './blog.routing';
import { BlogTeaserComponent } from './component/blog-teaser/blog-teaser.component';

@NgModule({
  declarations: [
    BlogComponent,
    BlogTeaserComponent,
  ],
  imports: [
    SharedModule,

    BlogRoutingModule
  ],
  exports: [],
  providers: [],
})
export class BlogModule { }
