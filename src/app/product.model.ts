import {ProductCategory} from './productCategory';

export class Product {

  productUID: string;
  productName: string;
  productPrice: string;
  productColor: string;
  productCategory: ProductCategory;
  productQuantity: number;
  productSpecification: string;
  isDeleted: boolean;

}
