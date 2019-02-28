import { Injectable } from '@angular/core';
// uses HTTP request
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, map, catchError} from 'rxjs/operators';

// uses Model related stuff
import { ServiceItem } from '../type/service-item';
// use Factory
import { ServiceItemFactory } from './service-item-factory';
// use constant for 
import { LocalHostUrl } from '../data/local-host-url'

@Injectable({
  providedIn: 'root'
})
export class ServiceItemProviderService {

  private api = LocalHostUrl;
  public  services: ServiceItem[];

  constructor(
    private httpClient : HttpClient, 
  ) { }

  private errorHandler(error: Error | any): Observable<any> {
    return Observable.throw(error);
  }

  getAll(): Observable<Array<ServiceItem>> {
    return this.httpClient.get<ServiceItem[]>(`${this.api}/services`)
      .pipe(
        retry(3),
        map( raw => raw
           .map( raw => ServiceItemFactory.fromObject(raw)) 
        ),
        catchError (this.errorHandler )
      )
  }

  getSingle(id: string): Observable<ServiceItem> {
    return this.httpClient
      .get<ServiceItem>(`${this.api}/services/${id}`)
      .pipe(
        retry(3),
        map(raw => ServiceItemFactory.fromObject(raw)),
        catchError(this.errorHandler)
      );
  }
}
