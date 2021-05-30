import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.scss']
})
export class ListBookComponent implements OnInit {

  constructor(private bookservice: UserService) { }

  dataSource: any = [];
  displayedColumns: any;
  collection = [];

  ngOnInit(): void {
    this.getBookList();
  }

  deleteBook(item){
    this.collection.splice(item-1,1)
    this.bookservice.deleteBook(item).subscribe( result => {
      console.warn("result", result);
    })
  }
  getBookList(){
    this.bookservice.getList().subscribe((result) => {
      this.displayedColumns = ['id', 'title', 'author', 'pages', 'price','Operations','Update'];
      this.dataSource = result;
    })
  }

}
