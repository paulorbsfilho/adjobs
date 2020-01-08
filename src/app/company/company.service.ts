import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Company} from '../models/company';
import {catchError, map} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {COMPANIES_LIST} from '../utils/urls';
import {CompanyResponse} from '../models/company-response';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }

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

  searchCompanies(term: string): Observable<CompanyResponse> {
    return this.http.get<CompanyResponse>(`${COMPANIES_LIST}/?company_name=${term}`).pipe(
      catchError(this.handleError<CompanyResponse>('searchCompanies'))
    );
  }

  addCompany(company: Company): Observable<Company> {
    return this.http.post<Company>(COMPANIES_LIST, company, this.httpOptions).pipe(
      catchError(this.handleError<Company>('addCompany'))
    );
  }

  deleteCompany(company: Company | number): Observable<Company> {
    const id = typeof company === 'number' ? company : company.pk;
    const url = `${COMPANIES_LIST}/${id}`;

    return this.http.delete<Company>(url, this.httpOptions).pipe(
      catchError(this.handleError<Company>('deleteCompany'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
