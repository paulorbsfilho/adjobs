import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CANDIDATES_LIST} from '../utils/urls';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Candidate} from '../models/candidate';
import {CandidateResponse} from '../models/candidate-response';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  constructor(private http: HttpClient) { }

  getCandidates(): Observable<Candidate[]> {
    return this.http.get<Candidate[]>(CANDIDATES_LIST)
      .pipe(
        catchError(this.handleError<Candidate[]>('getCandidates', []))
      );
  }

  getCandidatesResponse(): Observable<CandidateResponse> {
    return this.http.get<CandidateResponse>(CANDIDATES_LIST)
      .pipe(
        catchError(this.handleError<CandidateResponse>('getCandidates'))
      );
  }

  getCandidateNo404<Data>(id: number): Observable<Candidate> {
    const url = `${CANDIDATES_LIST}/?id=${id}`;
    return this.http.get<Candidate[]>(url)
      .pipe(
        map(candidates => candidates[0]),
        catchError(this.handleError<Candidate>(`getCandidate id=${id}`))
      );
  }

  getCandidate(id: number): Observable<Candidate> {
    const url = `${CANDIDATES_LIST}/${id}`;
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
