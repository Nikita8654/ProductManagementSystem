import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../product.service';
import {Product} from '../../../product.model';
import {Router} from '@angular/router';
import {ProductCategory} from '../../../productCategory';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];


  constructor(private productService: ProductService, private router: Router) {
  }

  ngOnInit(): void {
    this.reloadData();
  }


  reloadData() {
    this.productService.getProductList().subscribe(data => {
      this.products = data;
      console.log(this.products);
    });
  }


  deleteProduct(id: string) {
    this.productService.deleteProduct(id)
      .subscribe(data => {
          console.log(data);

        },
        error => console.log(error));
    this.router.navigate(['']);
  }

}
