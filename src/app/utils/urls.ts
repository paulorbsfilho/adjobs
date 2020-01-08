import {HttpHeaders} from '@angular/common/http';

export const BASE_URL = 'http://localhost:8000';
export const LOGIN = BASE_URL + '/api_auth/login/';
export const URL_TOKEN = BASE_URL + '/o/token/';
export const REGISTER_EMPLOYER = BASE_URL + '/sign-up-employer/';
export const REGISTER_CANDIDATE = BASE_URL + '/sign-up-candidate/';
export const EMPLOYERS_LIST = BASE_URL + '/employers/';
export const CANDIDATES_LIST = BASE_URL + '/candidates/';
export const COMPANIES_LIST = BASE_URL + '/companies/';
export const JOB_ADVERTISEMENTS_LIST = BASE_URL + '/jobs-advertisements/';
export const ADVERTISE_JOB = BASE_URL + '/advertise-job/';

const headersToken = new HttpHeaders({
  Authorization: 'Bearer ' + localStorage.getItem('accessToken')
});
export const OPTIONS_OBJECT = {headers: headersToken};
export const HEADERS_LOGIN = new HttpHeaders({
  // tslint:disable-next-line:max-line-length
  Authorization: 'Basic ' + btoa('mjCMgqa5T0irGUwh0utSiuYbDKIWQd2oxZ0u16J2' + ':' + 'ZH3viAyluIcz39PQtUAHFnnEfRdD8c8wrM6m5xPCDmxIF8vX1anzobXYUJKtFo54INvfCE4f3yPPlxfMHAV0PfIZHVni8ZTowBSb1Bn7m7mMbQF6PoddIobK3sILwZN7')
});
export const HEADERS_REGISTER = new HttpHeaders({
  Authorization: 'Basic ' + btoa('app-client-manager' + ':' + 'app-client-secret')
});
export const HEADERS_COMMON = new HttpHeaders({
  Authorization: 'Basic ' + btoa('app-client-manager' + ':' + 'app-client-secret')
});

export const CLIENT_ID = 'mjCMgqa5T0irGUwh0utSiuYbDKIWQd2oxZ0u16J2';
// tslint:disable-next-line:max-line-length
export const  CLIENT_SECRET = 'ZH3viAyluIcz39PQtUAHFnnEfRdD8c8wrM6m5xPCDmxIF8vX1anzobXYUJKtFo54INvfCE4f3yPPlxfMHAV0PfIZHVni8ZTowBSb1Bn7m7mMbQF6PoddIobK3sILwZN7';
