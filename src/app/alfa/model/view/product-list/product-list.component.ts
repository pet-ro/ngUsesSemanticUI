import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// Model related stuff 
import { ProductItem } from '../../type/product-item'
import { ProductItemProviderService} from '../../service/product-item-provider.service'



@Component({
  selector: 'bm-product-list',
  templateUrl: './product-list.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ProductListComponent implements OnInit {

  products   : ProductItem[];

  constructor( 
    private productItemProvider : ProductItemProviderService 
  ) { }

  ngOnInit() {
    this.productItemProvider.getAll()
    .subscribe(res => this.products = res);  
  }

}
