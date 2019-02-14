import { Component, OnInit } from '@angular/core';

import { ProductBook} from '../../../model/type/product-book'
import { ProductBookProviderService} from '../../../service/product-book-provider-service';

@Component({
  selector: 'bm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: ProductBook[];

  constructor(private productProvider: ProductBookProviderService) { }

  ngOnInit() {
    this.products = this.productProvider.getAll();
  }

}
