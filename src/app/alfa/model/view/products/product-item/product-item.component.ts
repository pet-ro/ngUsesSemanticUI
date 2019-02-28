import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
// Model stuff
import { ProductItem } from '../../../type/product-item';

@Component({
  selector: 'a.alfa-product-item',
  templateUrl: './product-item.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class ProductItemComponent implements OnInit {

  @Input() product: ProductItem;

  constructor() { }

  ngOnInit() {
  }

}
