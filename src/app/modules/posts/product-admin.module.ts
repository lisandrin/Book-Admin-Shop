import { NgModule } from '@angular/core';

import { ProductAdminRoutingModule } from './product-admin-routing.module';;
import { PostsComponent } from './posts.component';
import { AddBookComponent } from './add-book/add-book.component';
import { ListBookComponent } from './list/list-book.component';
import { RegisterComponent } from './register/register.component';

import { HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductDetailComponent } from './register/user-detail/product-detail.component';

import { MatButtonModule } from '@angular/material/button';
import { MatTableModule} from '@angular/material/table';
import { MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { UpdateBookComponent } from './update-book/update-book.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductHeaderComponent } from './product-header/product-header.component';

@NgModule({
  declarations: [
    PostsComponent,
    AddBookComponent,
    ListBookComponent,
    RegisterComponent,
    ProductDetailComponent,
    UpdateBookComponent,
    ProductHeaderComponent
  ],
  imports: [
    FormsModule,

    ProductAdminRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    MatIconModule,
    SharedModule
  ],
  exports: [
    FormsModule,
 
    ProductAdminRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [],
})
export class ProductAdminModule { }
