import { Component, OnInit } from '@angular/core';

import { ProductBook, Thumbnail } from '../../../model/type/product-book'
import { ProductBookProviderService} from '../../../service/product-book-provider-service';
import { ProductBookFactory } from 'src/app/service/product-book-factory';

@Component({
  selector: 'bm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: ProductBook[];

  constructor( private productBookProvider: ProductBookProviderService ) { }

  ngOnInit() {

    /* 
      this.productBookProvider.getAll()
      .subscribe(res => this.products = res);
     */
    /*   
     this.products = this.productBookProvider.getAllStaticData()  
    */

  this.products = [
    new ProductBook(
      'ISBN 978',
      'Angular', 
      [    'Hoppe',
           'Koppenhagen',
           'Malcher',
           'Woiwode' ],
     new Date(2017, 3, 1),
     'Grundlagen, fortgeschrittene Techniken und Best Practices mit TypeScript',
     5, 
     [ new Thumbnail('https://ng-buch.de/cover2.jpg', 'Buchcover')],
     'Diese Buch vermittelt einen Schnelleinstieg'
    )
  ]

  console.log( "pet-ro"  + this.products[0].key )
  }
  

}
