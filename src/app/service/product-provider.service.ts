import { Injectable } from '@angular/core';

// uses HTTP request
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, map, catchError} from 'rxjs/operators';

// uses Model related stuff
import { ProductBook, Thumbnail } from '../model/type/product-book';
import { ProductBookFactory } from './product-book-factory';

@Injectable({
  providedIn: 'root'
})
export class ProductProviderService {


  private api = 'https://book-monkey2-api.angular-buch.com';
  public  products: ProductBook[];

  constructor(private httpClient: HttpClient) { 
  }

  
  private errorHandler(error: Error | any): Observable<any> {
      return Observable.throw(error);
    }
 
  getAll(): Observable<ProductBook[]> {
    return this.httpClient.get<ProductBook[]>(`${this.api}/books/$(key)`)
      .pipe(
        retry(3),
        map( rawBooks => rawBooks
          .map( rawBook => ProductBookFactory.fromObject(rawBook)) 
        ),
        catchError(this.errorHandler)
      )
  }


  getSingle(key: string): Observable<ProductBook> {
    return this.httpClient.get<ProductBook>(`${this.api}/books/$(key)`)
       .pipe(
          retry(3),
          map(rawBook => ProductBookFactory.fromObject(rawBook)),
          catchError(this.errorHandler)
       )
  }

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
  
}
