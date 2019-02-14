import { Component, OnInit } from '@angular/core';

import { ActivatedRoute} from '@angular/router'

// Model related
import { ProductBookProviderService } from '../../../service/product-book-provider-service'

@Component({
  selector: 'bm-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  private providerService : ProductBookProviderService = ProductBookProviderService.Instance; 

  constructor() { }

  ngOnInit() {
  }

}
