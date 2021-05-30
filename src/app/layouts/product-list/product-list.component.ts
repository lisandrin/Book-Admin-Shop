import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  sideBarOpen = false;
  bookList;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getAllBooks();
  }
  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }

  getAllBooks(){
    this.productService.getBooks()
      .subscribe((res)=>{
        this.bookList = res;
      })
  }

}
