import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.scss'],
})
export class UpdateBookComponent implements OnInit {

  alert:boolean=false;
  editBook = new FormGroup({
    title: new FormControl(''),
    author: new FormControl(''),
    pages: new FormControl(''),
    image: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
  });
  constructor(private router: ActivatedRoute, private http: UserService) {}

  ngOnInit(): void {
    this.http
      .getCurrentBook(this.router.snapshot.params.id)
      .subscribe((res) => {
        this.editBook = new FormGroup({
          name: new FormControl(res['title']),
          author: new FormControl(res['author']),
          pages: new FormControl(res['pages']),
          image: new FormControl(res['image']),
          description: new FormControl(res['description']),
          price: new FormControl(res['price']),
        });
      });
  }

  onUpdate(){
    console.warn(this.editBook.value);
    this.http.updateBook(this.router.snapshot.params.id, this.editBook.value)
    .subscribe(res =>{
      this.alert = true;
    })
  }

  closeAlert(){
    this.alert = false;
  }
}
