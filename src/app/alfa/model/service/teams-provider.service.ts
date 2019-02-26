import { Injectable } from '@angular/core';
// uses HTTP request
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, map, catchError} from 'rxjs/operators';

// uses Model related stuff
import { Team } from '../type/team';
// use Factory
import { TeamsFactory } from './teams-factory';
// use constant for 
import { LocalHostUrl } from '../data/local-host-url'

@Injectable({
  providedIn: 'root'
})
export class TeamsProviderService {

  private api = LocalHostUrl;
  public  teams: Team[];

  constructor(
    private httpClient : HttpClient, 
  ) { }

  private errorHandler(error: Error | any): Observable<any> {
    return Observable.throw(error);
  }

  getAll(): Observable<Array<Team>> {
    return this.httpClient.get<Team[]>(`${this.api}/teams`)
      .pipe(
        retry(3),
        map( rawTeam => rawTeam
           .map( rawTeam => TeamsFactory.fromObject(rawTeam)) 
        ),
        catchError (this.errorHandler )
      )
  }

}
