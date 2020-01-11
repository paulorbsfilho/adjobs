import { AuthConfig } from 'angular-oauth2-oidc';
import {CLIENT_ID, CLIENT_SECRET, LOGIN, LOGOUT, URL_AUTHORIZE, URL_TOKEN, USER_INFO} from '../utils/urls';

export const authConfig: AuthConfig = {

  // // Url of the Identity Provider
  // issuer: 'https://steyer-identity-server.azurewebsites.net/identity',
  //
  // // URL of the SPA to redirect the user to after login
  // redirectUri: window.location.origin + '/index.html',
  //
  // // The SPA's id. The SPA is registered with this id at the auth-server
  // clientId: 'spa-demo',
  //
  // // set the scope for the permissions the client should request
  // // The first three are defined by OIDC. The 4th is a usecase-specific one
  // scope: 'openid profile email voucher',

  // myconfig
  // redirectUri: window.location.origin + '/index.html',
  // redirectUri: URL_AUTHORIZE,
  // issuer: URL_AUTHORIZE,
  // loginUrl: LOGIN,
  // logoutUrl: LOGOUT,
  tokenEndpoint: URL_TOKEN,
  userinfoEndpoint: USER_INFO,
  clientId: CLIENT_ID,
  dummyClientSecret: CLIENT_SECRET,
  scope: 'read:ad write:ad read:employer write:employer',
  options: 'Content-Type=application/x-www-form-urlencoded',
  oidc: false,
};
