import { Injectable } from '@angular/core';
/* 
// uses HTTP request
import { HttpClient } from '@angular/common/http';
*/

// uses Model related stuff
import { ProductBook, Thumbnail } from '../model/type/product-book';

@Injectable({
  providedIn: 'root'
})
export class ProductProviderService {
/*

  private api = 'https://book-monkey2-api.angular-buch.com';
  public  products: ProductBook[];

  constructor() { 
  }

  
  private errorHandler(error: Error | any): Observable<any> {
      return Observable.throw(error);
    }
 
  getAll(): Observable<Array<ProductBook>> {
    return this.http.get(`${this.api}/books`).
  }


  getSingle()

  getAllStaticData(): ProductBook[] {
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
  */
}
