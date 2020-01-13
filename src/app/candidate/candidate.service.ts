import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CANDIDATES_LIST} from '../utils/urls';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Candidate} from '../models/candidate';
import {CandidateResponse} from '../models/candidate-response';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }

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
    const url = `${CANDIDATES_LIST}${id}`;
    return this.http.get<Candidate>(url).pipe(
      catchError(this.handleError<Candidate>(`getCandidate id=${id}`))
    );
  }

  searchCandidate(term: string): Observable<CandidateResponse> {
    return this.http.get<CandidateResponse>(`${CANDIDATES_LIST}/?first_name=${term}`).pipe(
      catchError(this.handleError<CandidateResponse>('searchCandidate'))
    );
  }

  deleteCandidate(candidate: Candidate | number): Observable<Candidate> {
    const id = typeof candidate === 'number' ? candidate : candidate.pk;
    const url = `${CANDIDATES_LIST}/${id}`;

    return this.http.delete<Candidate>(url, this.httpOptions).pipe(
      catchError(this.handleError<Candidate>('deleteCandidate'))
    );
  }

  updateCandidate(candidate: Candidate): Observable<any> {
    return this.http.put(CANDIDATES_LIST, candidate, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateCandidate'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
