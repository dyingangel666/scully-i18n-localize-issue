<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
=======
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppConstants} from './app.constants';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: AppConstants.data.ROUTES.products
  },
  {
    path: AppConstants.data.ROUTES.products,
    loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule)
  },
  {
    path: AppConstants.data.ROUTES.productDetails,
    loadChildren: () => import('./modules/product-details/product-details.module').then(m => m.ProductDetailsModule)
  },
  {
    path: '**',
    redirectTo: AppConstants.data.ROUTES.products
  }
];

/**
 * Root routing module
 */
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false,
      scrollPositionRestoration: 'top'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
>>>>>>> initial commit
