import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../user.service';
import {User} from '../../user.model';

@Component({
  selector: 'app-product-list-layout',
  templateUrl: './product-list-layout.component.html',
  styleUrls: ['./product-list-layout.component.css']
})
export class ProductListLayoutComponent implements OnInit {
  usercategory: User;

  constructor(private router: Router, private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getUserCategory().subscribe(data => {
        this.usercategory = data;
        console.log(this.usercategory);
        console.log(this.usercategory.userCategory);
      },
      error => console.log(error));
  }

  addProductMaster() {
    this.router.navigateByUrl('/addMaster');
  }

  addProduct() {
    this.router.navigateByUrl('/add');
  }
}

export enum UserCategory {
  ADMIN,
  PRODUCT_MASTER,
  RETAILER
}
