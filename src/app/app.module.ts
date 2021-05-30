import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { ProductModule } from './layouts/product-list/product-list.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductAdminModule } from './modules/posts/product-admin.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    DefaultModule,
    ProductModule,
    HttpClientModule,
    ProductAdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
