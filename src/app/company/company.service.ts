import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Company} from '../models/company';
import {catchError, map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {COMPANIES_LIST} from '../utils/urls';
import {CompanyResponse} from '../models/company-response';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(COMPANIES_LIST)
      .pipe(
        catchError(this.handleError<Company[]>('getCompanies', []))
      );
  }

  getCompaniesResponse(): Observable<CompanyResponse> {
    return this.http.get<CompanyResponse>(COMPANIES_LIST)
      .pipe(
        catchError(this.handleError<CompanyResponse>('getCompanies'))
      );
  }

  getCompanyNo404<Data>(id: number): Observable<Company> {
    const url = `${COMPANIES_LIST}/?id=${id}`;
    return this.http.get<Company[]>(url)
      .pipe(
        map(companies => companies[0]),
        catchError(this.handleError<Company>(`getCompany id=${id}`))
      );
  }

  getCompany(id: number): Observable<Company> {
    const url = `${COMPANIES_LIST}/${id}`;
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
