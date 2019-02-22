import { Injectable } from '@angular/core';

// uses HTTP request
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, map, catchError} from 'rxjs/operators';

// uses Model related stuff
import { ProductBook, Thumbnail } from '../../model/type/product-book';
import { ProductBookFactory } from './product-book-factory';


const API4AngularBuch : string   = 'https://book-monkey2-api.angular-buch.com';

// After `npm start `
// or 
// Use `JSON Server` git stag
const API4LocalHost3000 : string = 'http://localhost:3000';


@Injectable({
  providedIn: 'root'
})
export class ProductBookProviderService {
 


  
  private api = API4LocalHost3000;
  public  products: ProductBook[];

  constructor(private httpClient: HttpClient) { 
  }

  
  private errorHandler(error: Error | any): Observable<any> {
      return Observable.throw(error);
    }
 
  getAll(): Observable<Array<ProductBook>> {
    return this.httpClient.get<ProductBook[]>(`${this.api}/books`)
      .pipe(
        retry(3),
        map( rawBooks => rawBooks
          .map( rawBook => ProductBookFactory.fromObject(rawBook)) 
        ),
        catchError (this.errorHandler )
      )
  }

  getAllSearch( searchTerm : string ) : Observable<ProductBook[]> {
    return  this.httpClient
      .get<ProductBook[]>(`${this.api}/books/search/${searchTerm}` )
      .pipe(
        retry(3),
        map ( rawBooks =>
              rawBooks.map(
                 rawBook =>
                 ProductBookFactory.fromObject( rawBook )
              ) ),
        catchError( this.errorHandler ) 
      )
  }

  getSingle(key: string): Observable<ProductBook> {
    return this.httpClient.get<ProductBook>(`${this.api}/books/$(key)`)
       .pipe(
          retry(3),
          map( rawBook => ProductBookFactory.fromObject(rawBook)),
          catchError( this.errorHandler )
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
       5, 
       [ new Thumbnail('https://ng-buch.de/cover2.jpg', 'Buchcover')],
       'Diese Buch vermittelt einen Schnelleinstieg'
      )
    ];
  }
  
  /*
   * 
   */
  create(productBook: ProductBook): Observable<any> {
    return this.httpClient
      .post(`${this.api}/book`, productBook, { responseType: 'text' })
      .pipe(
        catchError(this.errorHandler)
      );
  }

  /*
   ** depreacted
   * 
  create(productBook: ProductBook) : Observable<any> {
    return this.httpClient
      .post( `${this.api}/book`, 
             JSON.stringify(productBook), 
             { headers: this.headers} )
      .catchError( this.errorHandler );
  }

   */


  
  update(productBook : ProductBook): Observable<any> {
    return this.httpClient
      .put(`${this.api}/book/${productBook.key}`, productBook, { responseType: 'text' })
      .pipe(
        catchError(this.errorHandler)
      );
  }

  /* 
   * deprecated
   *
   * 
  update(productBook : ProductBook) : Observable<any> {
    return this.httpClient
      .put( `S{this.api}/book/${productBook.key}`,
             JSON.stringify(productBook), 
            { headers: this.headers}  )
      .catchError( this.errorHandler );
  }
  */

 remove(key: string): Observable<any> {
  return this.httpClient 
    .delete(`${this.api}/book/${key}`, { responseType: 'text' })
    .pipe(
      catchError(this.errorHandler)
    );
  }
  /*
  remove(key: string) : Observable<any> {
    return  this.httpClient
      .delete( `S{this.api}/book/${key}` )
      .catchError( this.errorHandler )
  }
  */ 

}
