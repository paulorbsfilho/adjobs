import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {ADVERTISE_JOB, JOB_ADVERTISEMENTS_LIST} from '../utils/urls';
import {catchError, map} from 'rxjs/operators';
import {AdvertisementJob} from '../models/advertisement-job';
import {AdvertisementJobResponse} from '../models/advertisement-job-response';
import {throwError as observableThrowError} from 'rxjs/internal/observable/throwError';

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
    return this.http.get<AdvertisementJob[]>(JOB_ADVERTISEMENTS_LIST, this.httpOptions)
      .pipe(
        catchError(this.handleError<AdvertisementJob[]>('getAdvertisementJobs', [])
        )
      );
  }

  goPrevious(previous): Observable<AdvertisementJob[]> {
    return this.http.get<AdvertisementJob[]>(previous)
      .pipe(
        catchError(this.handleError<AdvertisementJob[]>('getAdvertisementJobs', [])
        )
      );
  }

  goNext(next): Observable<AdvertisementJob[]> {
    return this.http.get<AdvertisementJob[]>(next)
      .pipe(
        catchError(this.handleError<AdvertisementJob[]>('getAdvertisementJobs', [])
        )
      );
  }

  getAdvertisementJobsResponse(): Observable<AdvertisementJobResponse> {
    return this.http.get<AdvertisementJobResponse>(JOB_ADVERTISEMENTS_LIST)
      .pipe(
        catchError(this.handleError<AdvertisementJobResponse>('getAdvertisementJobs')
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

  searchAdvertisementJobsResponse(term: string): Observable<AdvertisementJobResponse> {
    return this.http.get<AdvertisementJobResponse>(`${JOB_ADVERTISEMENTS_LIST}/?title=${term}`).pipe(
      catchError(this.handleError<AdvertisementJobResponse>('searchAdvertisementJobs'))
    );
  }

  addAdvertisementJob(job: AdvertisementJob): Observable<AdvertisementJob> {
    return this.http.post<AdvertisementJob>(ADVERTISE_JOB, job, this.httpOptions).pipe(
      catchError(this.handleError<AdvertisementJob>('addAdvertisementJob'))
    );
  }

  deleteAdvertisementJob(job: AdvertisementJob | number): Observable<AdvertisementJob> {
    const id = typeof job === 'number' ? job : job.pk;
    const url = `${JOB_ADVERTISEMENTS_LIST}${id}`;

    return this.http.delete<AdvertisementJob>(url, this.httpOptions).pipe(
      catchError(this.handleError<AdvertisementJob>('deleteAdvertisementJob'))
    );
  }

  updateAdvertisementJob(id: number, job: AdvertisementJob): Observable<any> {
    const url = `${JOB_ADVERTISEMENTS_LIST}${id}`;
    return this.http.put(url, job, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateAdvertisementJob'))
    );
  }

  advertiseJob(advertiseInfo): Observable<any> {
    return this.http.post(ADVERTISE_JOB,
      {
        title: advertiseInfo.title,
        description: advertiseInfo.description,
        requirements: advertiseInfo.requirements,
        desirable: advertiseInfo.desirable,
        payment: advertiseInfo.payment,
        company: advertiseInfo.company,
      },
      this.httpOptions).pipe(
      map((res: Response) => res.body),
      catchError((error: any) => observableThrowError(error.json().error || 'Server error')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
