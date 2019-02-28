import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
// Model related stuff
import { ProductItem } from '../../../type/product-item';
import { ProductItemProviderService } from '../../../service/product-item-provider.service'

@Component({
  selector: 'bm-alfa-product-list',
  templateUrl: './product-list.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class ProductListComponent implements OnInit {

  public  products: ProductItem[];
  
  constructor( 
      private productItemProvider: ProductItemProviderService,
      private router: Router,
    ) { }

  ngOnInit() {

    this.productItemProvider.getAll()
    .subscribe(res => this.products = res);  
  }

  changeTheRouter(id: string) {
    this.router.navigate(['/designs', id ]);
  }
}
