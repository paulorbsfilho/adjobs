import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Employer} from '../models/employer';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {Url} from '../utils/urls';

@Injectable({
  providedIn: 'root'
})
export class EmployerService {
  urls = Url;

  constructor(private http: HttpClient) {
  }

  getEmployers(): Observable<Employer[]> {
    return this.http.get<Employer[]>(this.urls.ADDRESS + this.urls.EMPLOYERS_LIST)
      .pipe(
        catchError(this.handleError<Employer[]>('getHeroes', []))
      );
  }

  getEmployerNo404<Data>(id: number): Observable<Employer> {
    const url = `${this.urls.ADDRESS + this.urls.EMPLOYERS_LIST}/?id=${id}`;
    return this.http.get<Employer[]>(url)
      .pipe(
        map(employers => employers[0]),
        catchError(this.handleError<Employer>(`getHero id=${id}`))
      );
  }

  getEmployer(id: number): Observable<Employer> {
    const url = `${this.urls.ADDRESS + this.urls.EMPLOYERS_LIST}/${id}`;
    return this.http.get<Employer>(url).pipe(
      catchError(this.handleError<Employer>(`getHero id=${id}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
