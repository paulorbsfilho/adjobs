import {Injectable} from '@angular/core';
import {Observable, throwError as observableThrowError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {LOGIN, REGISTER_EMPLOYER, REGISTER_CANDIDATE, URL_TOKEN} from '../utils/urls';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
  };
  httpOptionsReg = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }

  doLogin(username, password): Observable<any> {
    // tslint:disable-next-line:max-line-length
    const body = `grant_type=password&username=${username}&password=${password}&client_id=Oz6VFTP68uv4sOG5bz07cB4lh1UvUUnDI41hGQHO&client_secret=W38ct9oY1ZgezDSmUV2V77kaR1HdVNex9gwQycfGHl4fe2ithwg41mr4aPFR5iP4liFyKw1caZEDxxsLaFtkv5QiH3mgIeLUsdKefaPGHkrY3ZF04uTSoXcyibqAscSI`;
    return this.http.post(URL_TOKEN, body, this.httpOptions).pipe(
      map((res: Response) => res.headers.get('Authorization').substring(7)));
  }

  getToken(loginCredentials): Observable<any> {
    return this.http.post(LOGIN, loginCredentials, this.httpOptions).pipe(
      map((res: Response) => res.headers.get('Authorization').substring(7)));
  }

  doEmployerRegister(registerEmployerCredentials): Observable<any> {
    return this.http.post(REGISTER_EMPLOYER,
      {
        username: registerEmployerCredentials.username,
        email: registerEmployerCredentials.email,
        password: registerEmployerCredentials.password,
        first_name: registerEmployerCredentials.firstName,
        last_name: registerEmployerCredentials.lastName,
        phone: registerEmployerCredentials.phone,
        company_name: registerEmployerCredentials.companyName,
        catchPhrase: registerEmployerCredentials.catchPhrase,
        about: registerEmployerCredentials.about
      },
      this.httpOptionsReg).pipe(
      map((res: Response) => res.body),
      catchError((error: any) => observableThrowError(error.json().error || 'Server error')));
  }

  doCandidateRegister(registerCandidateCredentials): Observable<any> {
    return this.http.post(REGISTER_CANDIDATE,
      {
        username: registerCandidateCredentials.username,
        email: registerCandidateCredentials.email,
        password: registerCandidateCredentials.password,
        first_name: registerCandidateCredentials.firstName,
        last_name: registerCandidateCredentials.lastName,
        phone: registerCandidateCredentials.phone,
        academic_formation: registerCandidateCredentials.academicFormation,
        institution: registerCandidateCredentials.institution,
        bio: registerCandidateCredentials.bio,
        knowledge: registerCandidateCredentials.knowledge
      },
      this.httpOptionsReg).pipe(
      map((res: Response) => res.body),
      catchError((error: any) => observableThrowError(error.json().error || 'Server error')));
  }
}
