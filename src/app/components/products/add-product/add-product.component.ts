import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, FormGroupDirective, Validators} from '@angular/forms';
import {Product} from '../../../product.model';
import {ProductService} from '../../../product.service';
import {ProductCategory} from '../../../productCategory';
import {FormComponentBase} from '../../infrastructure/form-component-base';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent extends FormComponentBase implements OnInit, AfterViewInit {
  @ViewChild('id') firstItem: ElementRef;
  productCategory;
  productForm: FormGroup;

  constructor(private fb: FormBuilder, private productService: ProductService) {
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
        pattern: 'Alphanumeric at start and end only. Hyphen,underscores and space in between.'
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
    /* this.productService.getProductCategory()
       .subscribe(data => {
         this.productCategory = data;
         console.log(this.productCategory);
       }, error => console.log(error));*/
    console.log(ProductCategory);
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
  }

  onSubmit(value: Product) {
    this.productService.addProduct(this.productForm.value).subscribe(data =>
        data,
      error => console.log(error),
      () => {
        alert('Product added successfully!');
      });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.firstItem.nativeElement.focus();
    }, 250);
    this.startControlMonitoring(this.productForm);
  }
}

