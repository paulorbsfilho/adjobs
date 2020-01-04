import {Injectable} from '@angular/core';
import {Headers, RequestOptions, Response, Http, RequestMethod} from '@angular/http';
import {Observable, throwError as observableThrowError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Url} from '../utils/urls';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  headers: Headers;
  options: RequestOptions;

  constructor(private http: Http) {
    this.headers = new Headers(
      {
        'Content-Type': 'application/json',
      });
    this.options = new RequestOptions({headers: this.headers});
  }

  doLogin(loginCredentials): Observable<any> {
    const headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});
    const options = new RequestOptions({method: RequestMethod.Post, headers: headers});
    return this.http.post(Url.ADDRESS + Url.LOGIN, loginCredentials, options).pipe(
      map((res: Response) => res.headers.get('Authorization').substring(7)));
  }

  doEmployerRegister(registerEmployerCredentials): Observable<any> {
    return this.http.post(Url.ADDRESS + Url.REGISTER_EMPLOYER,
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
      this.options).pipe(
      map((res: Response) => res.json().body),
      catchError((error: any) => observableThrowError(error.json().error || 'Server error')));
  }

  doCandidateRegister(registerCandidateCredentials): Observable<any> {
    return this.http.post(Url.ADDRESS + Url.REGISTER_CANDIDATE,
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
      this.options).pipe(
      map((res: Response) => res.json().body),
      catchError((error: any) => observableThrowError(error.json().error || 'Server error')));
  }
}
