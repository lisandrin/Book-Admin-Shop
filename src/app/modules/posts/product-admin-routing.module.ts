import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component'
import { ListBookComponent } from './list/list-book.component';
import { RegisterComponent } from './register/register.component';
import { ProductDetailComponent } from './register/user-detail/product-detail.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { PostsComponent } from './posts.component';


const routes: Routes = [
  {
    path: '',
    component: PostsComponent
  },
  {
    path: 'add',
    component: AddBookComponent
  },
  {
    path: 'update/:id',
    component: UpdateBookComponent
  },
  {
    path: 'list',
    component: ListBookComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'register-detail/:id',
    component: ProductDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductAdminRoutingModule { }
