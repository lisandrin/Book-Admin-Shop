import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../user.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})

export class ProductDetailComponent implements OnInit{

  constructor(private actRoute: ActivatedRoute,
               private userService:UserService) {
    // this.product_id = this.actRoute.snapshot.params['id'];
  }
  user;

  ngOnInit(): void{
    this.loadUsers();
  }

  loadUsers(){
    const userId = this.actRoute.snapshot.paramMap.get('id');
    this.userService.getById(userId).subscribe(data => this.user = data)
  }
}