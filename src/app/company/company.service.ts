import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Company} from '../models/company';
import {catchError, map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Url} from '../utils/urls';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  urls = Url;

  constructor(private http: HttpClient) { }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.urls.ADDRESS + this.urls.COMPANIES_LIST)
      .pipe(
        catchError(this.handleError<Company[]>('getCompanies', []))
      );
  }

  getCompanyNo404<Data>(id: number): Observable<Company> {
    const url = `${this.urls.ADDRESS + this.urls.COMPANIES_LIST}/?id=${id}`;
    return this.http.get<Company[]>(url)
      .pipe(
        map(companies => companies[0]),
        catchError(this.handleError<Company>(`getCompany id=${id}`))
      );
  }

  getCompany(id: number): Observable<Company> {
    const url = `${this.urls.ADDRESS + this.urls.COMPANIES_LIST}/${id}`;
    return this.http.get<Company>(url).pipe(
      catchError(this.handleError<Company>(`getCompany id=${id}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
