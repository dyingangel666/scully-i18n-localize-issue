import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IProductModel} from '../../models/product.model.interface';
import {AppSettingsService} from '../../services/app-settings.service';
import {isScullyGenerated, TransferStateService} from '@scullyio/ng-lib';

@Component({
  selector: 'sg-products-page',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent implements OnInit
{
  /*************************************************************************************************************
   * VARS
   *************************************************************************************************************/

  public products: Array<IProductModel>;

  /*************************************************************************************************************
   * CTOR WITH DEPENDENCY INJECTION
   *************************************************************************************************************/

  constructor(
    private _route: ActivatedRoute
  )
  {}

  /*************************************************************************************************************
   * LIFECYCLE HOOKS AND EVENTS
   *************************************************************************************************************/

  ngOnInit(): void
  {
    this.products = this._route.data['products'];
  }

  /*************************************************************************************************************
   * PUBLIC FUNCTIONS
   *************************************************************************************************************/

  /*************************************************************************************************************
   * PRIVATE HELPER FUNCTIONS
   *************************************************************************************************************/
}
