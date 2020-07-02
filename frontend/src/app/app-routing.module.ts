import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { PageNotFoundComponent } from './layout/content-layout/page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: ContentLayoutComponent,
    // canActivate: [AuthGuard], // Should be replaced with actual auth guard
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () =>
          import('./module/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'blog',
        loadChildren: () =>
          import('./module/blog/blog.module').then(m => m.BlogModule)
      },
      {
        path: 'about',
        loadChildren: () =>
          import('./module/about/about.module').then(m => m.AboutModule)
      },
      { path: '**', component: PageNotFoundComponent }
    ]
  },
  // {
  //   path: 'auth',
  //   component: AuthLayoutComponent,
  //   loadChildren: () =>
  //     import('./module/auth/auth.module').then(m => m.AuthModule)
  // },
  // Fallback when no prior routes is matched
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
