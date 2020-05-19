import { NgModule } from '@angular/core';


import { SharedModule } from '../../shared/shared.module';
import { AboutComponent } from './page/about.component';
import { AboutRoutingModule } from './about.routing';

@NgModule({
    declarations: [
        AboutComponent,
    ],
    imports: [
        SharedModule,

        AboutRoutingModule
    ],
    exports: [],
    providers: [],
})
export class AboutModule {}
