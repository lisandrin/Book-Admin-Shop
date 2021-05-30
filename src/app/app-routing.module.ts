import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { ProductListComponent } from './layouts/product-list/product-list.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { NoPageFoundComponent } from './shared/components/no-page-found/no-page-found.component';

const routes: Routes = [
  {
    path:"default",
    component:DefaultComponent,
    children: [
      {
      path: "",
      component:DashboardComponent
      },
      {
        path: "posts",
        loadChildren: () => import("./modules/posts/product-admin.module").then(
          module => module.ProductAdminModule
        )
      },
    ]
  },
  {
    path: "",
    component: ProductListComponent
  },
  {
    path: "***",
    component: NoPageFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
