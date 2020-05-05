import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsDetailsRoutingModule } from './products-details-routing.module';
import { ProductDetailsComponent } from './product-details.component';


@NgModule({
  declarations: [ProductDetailsComponent],
  imports: [
    CommonModule,
    ProductsDetailsRoutingModule
  ]
})
export class ProductDetailsModule { }
