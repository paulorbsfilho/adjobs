import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Employer} from '../models/employer';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {EMPLOYERS_LIST} from '../utils/urls';
import {EmployerResponse} from '../models/employer-response';

@Injectable({
  providedIn: 'root'
})
export class EmployerService {

  constructor(private http: HttpClient) {
  }

  getEmployers(): Observable<Employer[]> {
    return this.http.get<Employer[]>(EMPLOYERS_LIST)
      .pipe(
        catchError(this.handleError<Employer[]>('getHeroes', []))
      );
  }

  getEmployersResponse(): Observable<EmployerResponse> {
    return this.http.get<EmployerResponse>(EMPLOYERS_LIST)
      .pipe(
        catchError(this.handleError<EmployerResponse>('getHeroes'))
      );
  }

  getEmployerNo404<Data>(id: number): Observable<Employer> {
    const url = `${EMPLOYERS_LIST}/?id=${id}`;
    return this.http.get<Employer[]>(url)
      .pipe(
        map(employers => employers[0]),
        catchError(this.handleError<Employer>(`getHero id=${id}`))
      );
  }

  getEmployer(id: number): Observable<Employer> {
    const url = `${EMPLOYERS_LIST}/${id}`;
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
