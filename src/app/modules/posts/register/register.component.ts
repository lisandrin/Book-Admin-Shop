import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  alert:boolean = false;
  usersArr: any = [];
  displayedColumns:any;
  dataSource: any;

  addUser = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),

  })
  constructor(private userHttp: UserService) { }

  ngOnInit(): void {
    this.getOnList();
  }

  collectUsers(){
    this.userHttp.addUser(this.addUser.value).subscribe((result) => {
      this.alert = true;
      this.addUser.reset({});
    })
  }

  getOnList(){
    this.userHttp.getUserList().subscribe((result) => {
      this.displayedColumns = ['id', 'name', 'email', 'detail'];
      this.dataSource = result;
    })
  }

  closeAlert(){
    this.alert = false;
  }
}
