
import { Injectable } from '@angular/core';


// uses Model related stuff
import { ProductBook, Thumbnail } from '../model/type/product-book';
import { ProductBookFactory} from './product-book-factory'

@Injectable({
  providedIn: 'root'
})
export class ProductBookProviderService {

/* 
   private headers = ... 

   We ignore this as the Angular uses the deprecated  `HttpModul`.
   The new `HttpClientModul` uses for the Header by default 
   the ('Content-Type', 'application/json')
 */
  
  private api = 'https://book-monkey2-api.angular-buch.com';
  public  products: ProductBook[];

  /* Provide Singleton
   * 
   * ProductBookProviderService.Instance
   * 
   * This require 
   *  -  private static _instance 
   *  -  public  static get (Instance) 
   *  -  private constructor
   */
   

  private static _instance:  ProductBookProviderService;

  public static get Instance() {
      return this._instance || (this._instance = new this());
  }

  private constructor() { 
  }



  getAll(): ProductBook[] {
    return  [
      new ProductBook(
        'ISBN 978',
        'Angular', 
        [    'Hoppe',
             'Koppenhagen',
             'Malcher',
             'Woiwode' ],
       new Date(2017, 3, 1),
       'Grundlagen, fortgeschrittene Techniken und Best Practices mit TypeScript',
       -1, 
       [ new Thumbnail('https://ng-buch.de/cover2.jpg', 'Buchcover')],
       'Diese Buch vermittelt einen Schnelleinstieg'
      )
    ];
  }
}
