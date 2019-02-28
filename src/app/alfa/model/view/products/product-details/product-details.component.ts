import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// Model stuff
import { ProductItem } from '../../../type/product-item';
import { ProductItemFactory } from '../../../service/product-item-factory';
import { ProductItemProviderService } from '../../../service/product-item-provider.service';

@Component({
  selector: 'bm-product-details',
  templateUrl: './product-details.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ProductDetailsComponent implements OnInit {

  product: ProductItem = ProductItemFactory.empty();


  constructor(
    private productItemProvider: ProductItemProviderService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    this.productItemProvider.getSingle(params['id'])
      .subscribe( raw => this.product = raw );

  }

}
