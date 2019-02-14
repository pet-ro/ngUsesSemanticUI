import { Component, OnInit } from '@angular/core';

import { ActivatedRoute} from '@angular/router'

// Model related
import { ProductBookProviderService } from '../../../service/product-book-provider-service'
import { ProductBook } from 'src/app/model/type/product-book';

@Component({
  selector: 'bm-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product : ProductBook;

  constructor( private productBookProvider : ProductBookProviderService,
               private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    this.productBookProvider.getSingle(params['key'])
      .subscribe ( book => this.product = book);

  }

}
