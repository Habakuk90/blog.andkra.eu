import { NgModule } from '@angular/core';


import { SharedModule } from '../../shared/shared.module';
import { AboutComponent } from './page/about.component';
import { AboutDetailComponent } from './page/about-detail/about-detail.component';
import { AboutRoutingModule } from './about.routing';

@NgModule({
    declarations: [
        AboutComponent,
        AboutDetailComponent
    ],
    imports: [
        SharedModule,

        AboutRoutingModule
    ],
    exports: [],
    providers: [],
})
export class AboutModule {}
