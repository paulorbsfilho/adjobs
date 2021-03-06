import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {OAuthService} from 'angular-oauth2-oidc';
import {Ng4LoadingSpinnerService} from 'ng4-loading-spinner';
import {AuthService} from '../auth.service';
import {CLIENT_ID, CLIENT_SECRET, URL_TOKEN} from '../../utils/urls';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  loginForm: FormGroup;
  registerEmployerForm: FormGroup;
  registerCandidateForm: FormGroup;
  successTextAlert: string;
  errorTextAlert: string;
  user: object;

  text = 'Sou Empresário';
  employer = false;
  private access_token: string;
  searchForm: FormGroup;
  register: boolean;

  constructor(
    private route: Router,
    private authService: AuthService,
    private spinner: Ng4LoadingSpinnerService,
    private oauthService: OAuthService,
  ) {
    this.oauthService.oidc = false;
    this.oauthService.strictDiscoveryDocumentValidation = false;
    this.oauthService.redirectUri = window.location.origin  + '/index.html';
    this.oauthService.tokenEndpoint = URL_TOKEN;
    this.oauthService.clientId = CLIENT_ID;
    this.oauthService.dummyClientSecret = CLIENT_SECRET;
    this.oauthService.setStorage(sessionStorage);
    this.oauthService.options = 'Content-Type=application/x-www-form-urlencoded';
  }

  ngOnInit(): void {
    this.register = false;
    this.access_token = this.oauthService.getAccessToken();
    this.searchForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
    this.registerEmployerForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      companyName: new FormControl('', Validators.required),
      catchPhrase: new FormControl('', Validators.required),
      about: new FormControl('', Validators.required),
    });
    this.registerCandidateForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      academicFormation: new FormControl('', Validators.required),
      institution: new FormControl('', Validators.required),
      bio: new FormControl('', Validators.required),
      knowledge: new FormControl('', Validators.required),
    });
  }

  redirectToHome() {
    this.route.navigateByUrl('/home');
  }

  goHome() {
    if (this.authService) {
      this.redirectToHome();
    }
  }

  signIn(loginCredentials) {
    const username = loginCredentials.username;
    const password = loginCredentials.password;
    this.oauthService.scope = 'read:ad write:ad read:employer write:employer';
    this.oauthService.fetchTokenUsingPasswordFlowAndLoadUserProfile(username, password).then(() => {
        const claims = this.oauthService.getIdentityClaims();
      // tslint:disable-next-line:no-console
        if (claims) { console.debug('given_name', claims); }
      }
    );
    this.access_token = this.oauthService.getAccessToken();
  }

  signIn2(loginCredentials) {
    const username = loginCredentials.username;
    const password = loginCredentials.password;
    this.spinner.show();
    this.authService.doLogin(username, password).subscribe(
      accessToken => {
        window.localStorage.setItem('access_token', accessToken);
        this.access_token = accessToken;
        this.goHome();
        this.spinner.hide();
      },
      error => {
        this.errorTextAlert = error;
        this.spinner.hide();
      }
    );
  }

  candidateRegister(registerCredentials) {
    this.spinner.show();
    this.authService.doCandidateRegister(registerCredentials).subscribe(
      response => {
        this.successTextAlert = 'Usuário criado, entre utilizando suas credenciais.';
        this.spinner.hide();
      },
      error => {
        this.errorTextAlert = error;
        this.spinner.hide();
      }
    );
  }

  employerRegister(registerCredentials) {
    this.spinner.show();
    this.authService.doEmployerRegister(registerCredentials).subscribe(
      response => {
        this.successTextAlert = 'Usuário criado, entre utilizando suas credenciais.';
        this.spinner.hide();
      },
      error => {
        this.errorTextAlert = error;
        this.spinner.hide();
      }
    );
  }

  closeSuccessTextAlert() {
    this.successTextAlert = '';
  }

  closeErrorTextAlert() {
    this.errorTextAlert = '';
  }

  changeText(): void {
    this.employer = !this.employer;
    if (!this.employer) {
      this.text = 'Sou Empresário';
    }
    if (this.employer) {
      this.text = 'Sou Candidato';
    }
  }

  changeLoginOrReg(): void {
    this.register = !this.register;
  }
}
