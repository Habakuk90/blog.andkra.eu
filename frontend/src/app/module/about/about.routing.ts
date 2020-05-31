import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './page/about.component';
import { AboutDetailComponent } from './page/about-detail/about-detail.component';

const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: ':id', component: AboutDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
