import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

/**
 * JobsResolver
 *
 * Resolver for the job list page to make sure that the data is already loaded when angular initializes the view
 */
@Injectable()
export class ProductsResolver implements Resolve<any>
{
  private readonly PRODUCTS_JSON_PATH = 'assets/products.json';

  /*************************************************************************************************************
   * CTOR WITH DEPENDENCY INJECTION
   *************************************************************************************************************/

  constructor(
    private _http: HttpClient
  )
  {}

  /*************************************************************************************************************
   * PUBLIC FUNCTIONS
   *************************************************************************************************************/

  /**
   * Resolve interface fn
   */
  resolve(route: ActivatedRouteSnapshot): Observable<any>
  {
    return this._http.get(this.PRODUCTS_JSON_PATH);
  }
}
