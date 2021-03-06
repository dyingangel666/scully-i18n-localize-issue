import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsRoutingModule} from './products-routing.module';
import {ProductsComponent} from './products.component';
import {ProductsResolver} from './products.resolver';


@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  providers: [
    ProductsResolver
  ]
})
export class ProductsModule {}
