import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';
import {USER_INFO} from '../utils/urls';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  currentUser(): Observable<User> {
    return this.http.get<User>(USER_INFO)
      .pipe(
        catchError(this.handleError<User>('getCurrentUser'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
