import { HttpHeaders } from '@angular/common/http';

export enum Url {
  ADDRESS = 'http://localhost:8000',
  LOGIN = 'api_auth/',
  REGISTER_EMPLOYER = '/sign-up-employer/',
  REGISTER_CANDIDATE = '/sign-up-candidate/',
  USERS_LIST = '/users/',
  EMPLOYERS_LIST = '/employers/',
  CANDIDATES_LIST = '/candidates/',
  COMPANIES_LIST = '/companies/',
  JOB_ADVERTISEMENTS_LIST = '/jobs-advertisements/',
}

export const BASE_URL = 'http://localhost:8000';
export const URL_TOKEN = BASE_URL + 'o/token';
export const REGISTER_EMPLOYER = '/sign-up-employer/';
export const REGISTER_CANDIDATE = '/sign-up-candidate/';
export const RESEND_REGISTER_TOKEN_URL = BASE_URL + 'api/public/resendRegistrationToken/users';

const headersToken = new HttpHeaders({
  Authorization: 'Bearer ' + localStorage.getItem('accessToken')
});
export const OPTIONS_OBJECTO = { headers: headersToken };
export const HEADERS_LOGIN = new HttpHeaders({
  Authorization: 'Basic ' + btoa('app-cliente-manager' + ':' + 'app-cliente-secret')
});
export const HEADERS_REGISTER = new HttpHeaders({
  Authorization: 'Basic ' + btoa('app-cliente-manager' + ':' + 'app-cliente-secret')
});
export const HEADERS_COMMUN = new HttpHeaders({
  Authorization: 'Basic ' + btoa('app-cliente-manager' + ':' + 'app-cliente-secret')
});
