import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {UserService} from '../user.service';
@Component({
  selector: 'app-add-comp',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  alert:boolean = true;

  addBook = new FormGroup({
    title: new FormControl(''),
    author: new FormControl(''),
    pages: new FormControl(''),
    image: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
  })
  constructor(private bookservice: UserService) { }

  ngOnInit(): void {
  }

  collectResto(){
    // console.log(this.addResto.value);
    this.bookservice.saveBook(this.addBook.value).subscribe((result) =>{
      this.alert = true;
      this.addBook.reset({});
    })
  }
  closeAlert(){
    this.alert = false;
  }

}
