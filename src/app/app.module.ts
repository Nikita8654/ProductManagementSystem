import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/shared/header/header.component';
import {FooterComponent} from './components/shared/footer/footer.component';
import { FilterComponent } from './components/product-list-layout/filter/filter.component';
import { ProductListComponent } from './components/product-list-layout/product-list/product-list.component';
import {HttpClientModule} from '@angular/common/http';
import { NavComponent } from './components/shared/nav/nav.component';
import { ProductListLayoutComponent } from './components/product-list-layout/product-list-layout.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {MatPaginatorModule} from '@angular/material/paginator';
import { AddProductComponent } from './components/products/add-product/add-product.component';
import { UpdateProductComponent } from './components/products/update-product/update-product.component';
import { AddProductMasterComponent } from './components/add-product-master/add-product-master.component';
import {MatCardModule} from '@angular/material/card';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {InternalServerErrorComponent} from './components/error-pages/internal-server-error/internal-server-error.component';
import {NotFoundComponent} from './components/error-pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FilterComponent,
    ProductListComponent,
    NavComponent,
    ProductListLayoutComponent,
    AddProductComponent,
    UpdateProductComponent,
    AddProductMasterComponent,
    InternalServerErrorComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatListModule,
    MDBBootstrapModule.forRoot(),
    MatPaginatorModule,
    MatCardModule,
    FormsModule,
    MatSelectModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatIconModule,
    MatNativeDateModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule

  ],
  providers: [{ provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
