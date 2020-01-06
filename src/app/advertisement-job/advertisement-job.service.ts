import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {JOB_ADVERTISEMENTS_LIST} from '../utils/urls';
import {catchError, map} from 'rxjs/operators';
import {AdvertisementJob} from '../models/advertisement-job';

@Injectable({
  providedIn: 'root'
})
export class AdvertisementJobService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }

  getAdvertisementJobs(): Observable<AdvertisementJob[]> {
    return this.http.get<AdvertisementJob[]>(JOB_ADVERTISEMENTS_LIST)
      .pipe(
        catchError(this.handleError<AdvertisementJob[]>('getAdvertisementJobs', [])
      )
    );
  }

  getAdvertisementJobsNo404<Data>(id: number): Observable<AdvertisementJob> {
    const url = `${JOB_ADVERTISEMENTS_LIST}/?id=${id}`;
    return this.http.get<AdvertisementJob[]>(url)
      .pipe(
        map(advertisements => advertisements[0]),
        catchError(this.handleError<AdvertisementJob>(`getAdvertisementJob id=${id}`))
      );
  }

  getAdvertisementJob(id: number): Observable<AdvertisementJob> {
    const url = `${JOB_ADVERTISEMENTS_LIST}${id}`;
    return this.http.get<AdvertisementJob>(url).pipe(
      catchError(this.handleError<AdvertisementJob>(`getAdvertisementJob id=${id}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
