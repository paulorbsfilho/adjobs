import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Url} from '../utils/urls';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Candidate} from '../models/candidate';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  constructor(private http: HttpClient) { }
  urls = Url;

  getCandidates(): Observable<Candidate[]> {
    return this.http.get<Candidate[]>(this.urls.ADDRESS + this.urls.CANDIDATES_LIST)
      .pipe(
        catchError(this.handleError<Candidate[]>('getCandidates', []))
      );
  }

  getCandidateNo404<Data>(id: number): Observable<Candidate> {
    const url = `${this.urls.ADDRESS + this.urls.CANDIDATES_LIST}/?id=${id}`;
    return this.http.get<Candidate[]>(url)
      .pipe(
        map(candidates => candidates[0]),
        catchError(this.handleError<Candidate>(`getCandidate id=${id}`))
      );
  }

  getCandidate(id: number): Observable<Candidate> {
    const url = `${this.urls.ADDRESS + this.urls.CANDIDATES_LIST}/${id}`;
    return this.http.get<Candidate>(url).pipe(
      catchError(this.handleError<Candidate>(`getCandidate id=${id}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
