import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Product} from '../../../product.model';
import {ProductService} from '../../../product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FormComponentBase} from '../../infrastructure/form-component-base';
import {ProductCategory} from '../../../productCategory';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent extends FormComponentBase implements OnInit, AfterViewInit {
  product: Product;
  id: string;
  @ViewChild('id') firstItem: ElementRef;
  productCategory;
  productForm: FormGroup;

  constructor(private fb: FormBuilder, private route: ActivatedRoute
    ,         private productService: ProductService, private router: Router) {
    super();
    this.validationMessages = {
      productUID: {
        required: 'Required',
        maxlength: 'Id maximum length is 10.',
        pattern: ' First two should be letters and rest are digits.'
      },
      productName: {
        required: 'Required',
        maxlength: 'Id maximum length is 10.',
        pattern: 'Alphanumeric at start and end only with hyphen,underscores and space in between.'
      },
      productPrice: {
        required: 'Required',
        pattern: 'Enter valid price.'
      },
      productColor: {
        required: 'Required',
        pattern: 'Enter valid color.'
      },
      productCategory: {
        required: 'Required',
      },
      productQuantity: {
        required: 'Required',
        pattern: 'Valid product quantity.'
      },
      productSpecification: {
        required: 'Required',
        //pattern: 'Product description allowed letters, digits,spaces and special characters .Start with a letter.'
      },

    };
    this.formErrors = {
      productUID: '',
      productName: '',
      productPrice: '',
      productColor: '',
      productCategory: '',
      productQuantity: '',
      productSpecification: ''
    };

  }


  ngOnInit(): void {
    this.productCategory = ProductCategory;

    this.productForm = this.fb.group({
      productUID: ['', [Validators.required, Validators.pattern('^[a-zA-Z]{2}[0-9]{4}$')]],
      productName: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+(?:[\w -]*[a-zA-Z0-9]+)*$')]],
      productPrice: ['', [Validators.required, Validators.pattern('^[1-9][0-9]*')]],
      productColor: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      productCategory: ['', [Validators.required]],
      productQuantity: ['', [Validators.required, Validators.pattern('[1-9][0-9]*')]],
      productSpecification: ['', [Validators.required]],
    });

    this.id = this.route.snapshot.params.id;
    this.productService.getProduct(this.id)
      .subscribe(data => {
        this.product = data;
        this.productForm.setValue(this.product);
      }, error => console.log(error));
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.firstItem.nativeElement.focus();
    }, 250);
    this.startControlMonitoring(this.productForm);
  }

  onSubmit(value: any) {
    this.productService.updateProduct(this.productForm.value, this.id)
      .subscribe(data => {
        console.log(data);
      }, error => console.log(error));
    alert('Product updated successfully!');
    this.router.navigate(['']);
  }
}
