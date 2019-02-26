import { Injectable } from '@angular/core';
// uses HTTP request
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, map, catchError} from 'rxjs/operators';
// uses Model related stuff
import { ProductItem } from '../type/product-item';
// use Factory
import { ProductItemFactory } from './product-item-factory';
// use constant for 
import { LocalHostUrl } from '../data/local-host-url'

@Injectable({
  providedIn: 'root'
})
export class ProductItemProviderService {

  private api = LocalHostUrl;
  public  products: ProductItem[];

  constructor(
    private httpClient : HttpClient, 
  ) { }

  private errorHandler(error: Error | any): Observable<any> {
    return Observable.throw(error);
  }

  getAll(): Observable<Array<ProductItem>> {
    return this.httpClient.get<ProductItem[]>(`${this.api}/designs`)
      .pipe(
        retry(3),
        map( rawTeam => rawTeam
           .map( rawTeam => ProductItemFactory.fromObject(rawTeam)) 
        ),
        catchError (this.errorHandler )
      )
  }

}
