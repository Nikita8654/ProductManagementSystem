import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddProductComponent} from './components/products/add-product/add-product.component';
import {UpdateProductComponent} from './components/products/update-product/update-product.component';
import {AddProductMasterComponent} from './components/add-product-master/add-product-master.component';
import {ProductListLayoutComponent} from './components/product-list-layout/product-list-layout.component';


const routes: Routes = [
  { path: '', component: ProductListLayoutComponent },
  { path: 'add', component: AddProductComponent },
  { path: 'edit/:id', component: UpdateProductComponent},
  { path: 'addMaster', component: AddProductMasterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
