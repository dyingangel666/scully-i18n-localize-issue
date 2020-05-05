import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'sg-product-details-page',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailsComponent
{
}
