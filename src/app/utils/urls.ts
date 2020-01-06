import {HttpHeaders} from '@angular/common/http';

export enum Url {
  BASE_URL = 'http://localhost:8000',
  LOGIN = '/api_auth/login/',
  REGISTER_EMPLOYER = '/sign-up-employer/',
  REGISTER_CANDIDATE = '/sign-up-candidate/',
  USERS_LIST = '/users/',
  EMPLOYERS_LIST = '/employers/',
  CANDIDATES_LIST = '/candidates/',
  COMPANIES_LIST = '/companies/',
  JOB_ADVERTISEMENTS_LIST = '/jobs-advertisements/',
}

export const BASE_URL = 'http://localhost:8000';
export const LOGIN = BASE_URL + '/api_auth/login/';
export const URL_TOKEN = BASE_URL + '/o/token/';
export const REGISTER_EMPLOYER = BASE_URL + '/sign-up-employer/';
export const REGISTER_CANDIDATE = BASE_URL + '/sign-up-candidate/';
export const EMPLOYERS_LIST = BASE_URL + '/employers/';
export const CANDIDATES_LIST = BASE_URL + '/candidates/';
export const COMPANIES_LIST = BASE_URL + '/companies/';
export const JOB_ADVERTISEMENTS_LIST = BASE_URL + '/jobs-advertisements/';
export const RESEND_REGISTER_TOKEN_URL = BASE_URL + 'api/public/resendRegistrationToken/users';

const headersToken = new HttpHeaders({
  Authorization: 'Bearer ' + localStorage.getItem('accessToken')
});
export const OPTIONS_OBJECT = {headers: headersToken};
export const HEADERS_LOGIN = new HttpHeaders({
  Authorization: 'Basic ' + btoa('app-client-manager' + ':' + 'app-client-secret')
});
export const HEADERS_REGISTER = new HttpHeaders({
  Authorization: 'Basic ' + btoa('app-client-manager' + ':' + 'app-client-secret')
});
export const HEADERS_COMMON = new HttpHeaders({
  Authorization: 'Basic ' + btoa('app-client-manager' + ':' + 'app-client-secret')
});
