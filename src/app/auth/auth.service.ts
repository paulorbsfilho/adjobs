import {Injectable} from '@angular/core';
import {Observable, throwError as observableThrowError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Url, LOGIN, REGISTER_EMPLOYER, REGISTER_CANDIDATE} from '../utils/urls';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  urls = Url;
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  doLogin(loginCredentials): Observable<any> {
    return this.http.post(LOGIN, loginCredentials, this.httpOptions).pipe(
      map((res: Response) => res.headers.get('Authorization').substring(7)));
  }

  getToken(loginCredentials): Observable<any> {
    return this.http.post(LOGIN, loginCredentials, this.httpOptions).pipe(
      map((res: Response) => res.headers.get('Authorization').substring(7)));
  }

  // login(username: string, password: string): Observable<any> {
  //   const params = new HttpParams()
  //     .set('username', username)
  //     .set('password', password)
  //     .set('grant_type', 'password');
  //   const options = {
  //     headers: HEADERS_COMMON,
  //     params
  //   };
  //
  //   return this.http.post<any>(this, params,
  //     {
  //       headers: new HttpHeaders().append('Authorization',
  //         'Basic ' + btoa(`${this.config.config.clientId}:${this.config.config.clientSecret}`)),
  //     });
  // }

  doEmployerRegister(registerEmployerCredentials): Observable<any> {
    return this.http.post(REGISTER_EMPLOYER,
      {
        username: registerEmployerCredentials.username,
        email: registerEmployerCredentials.email,
        password: registerEmployerCredentials.password,
        firstName: registerEmployerCredentials.firstName,
        lastName: registerEmployerCredentials.lastName,
        phone: registerEmployerCredentials.phone,
        companyName: registerEmployerCredentials.companyName,
        catchPhrase: registerEmployerCredentials.catchPhrase,
        about: registerEmployerCredentials.about
      },
      this.httpOptions).pipe(
      map((res: Response) => res.body),
      catchError((error: any) => observableThrowError(error.json().error || 'Server error')));
  }

  doCandidateRegister(registerCandidateCredentials): Observable<any> {
    return this.http.post(REGISTER_CANDIDATE,
      {
        username: registerCandidateCredentials.username,
        email: registerCandidateCredentials.email,
        password: registerCandidateCredentials.password,
        firstName: registerCandidateCredentials.firstName,
        lastName: registerCandidateCredentials.lastName,
        phone: registerCandidateCredentials.phone,
        academicFormation: registerCandidateCredentials.academicFormation,
        institution: registerCandidateCredentials.institution,
        bio: registerCandidateCredentials.bio,
        knowledge: registerCandidateCredentials.knowledge
      },
      this.httpOptions).pipe(
      map((res: Response) => res.body),
      catchError((error: any) => observableThrowError(error.json().error || 'Server error')));
  }
}
