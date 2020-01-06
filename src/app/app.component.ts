import {Component, OnInit} from '@angular/core';
import {AuthService} from './auth/auth.service';
import {Router} from '@angular/router';
import {AdvertisementJobService} from './advertisement-job/advertisement-job.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Oauth2Response} from './auth/oauth2Response';
import {JwksValidationHandler, OAuthService} from 'angular-oauth2-oidc';
import {Ng4LoadingSpinnerService} from 'ng4-loading-spinner';
import {AdvertisementJob} from './models/advertisement-job';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  selectedAdvertisementJob: AdvertisementJob;
  advertisementJobs: AdvertisementJob[];

  oauth2Token: string;
  oauth2TokenResponse: Oauth2Response;
  title = 'ADJobs';
  loginForm: FormGroup;
  registerEmployerForm: FormGroup;
  registerCandidateForm: FormGroup;
  successTextAlert: string;
  errorTextAlert: string;

  constructor(
    private oauthService: OAuthService,
    private route: Router,
    private authService: AuthService,
    private advertisementJobService: AdvertisementJobService,
    private spinner: Ng4LoadingSpinnerService,
    ) {
    this.oauthService.redirectUri = window.location.origin;
    this.oauthService.clientId = '{client-id}';
    this.oauthService.scope = 'openid profile email';
    this.oauthService.issuer = 'https://dev-{dev-id}.oktapreview.com';
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
  }

  ngOnInit(): void {
    this.getAdvertisementJobs();
    this.oauth2Token = window.localStorage.getItem('oauth2');
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
    if (this.oauth2Token) {
      this.redirectToHome();
    }
  }

  // signIn(loginCredentials) {
  //   this.spinner.show();
  //   this.authService.doLogin(loginCredentials).subscribe(
  //     oauth2Token => {
  //       window.localStorage.setItem('jwt', jwt);
  //       this.oauth2Token = oauth2Token;
  //       this.oauth2TokenResponse = ();
  //       window.localStorage.setItem('emailLogged', this.jwtResponse.sub);
  //       this.goHome();
  //       this.spinner.hide();
  //     },
  //     error => {
  //       this.errorTextAlert = error;
  //       this.spinner.hide();
  //     }
  //   );
  // }

  onSelect(advertisementJob: AdvertisementJob): void {
    this.selectedAdvertisementJob = advertisementJob;
  }

  getAdvertisementJobs(): void {
    this.advertisementJobService.getAdvertisementJobs()
      .subscribe(advertisementJobs => this.advertisementJobs = advertisementJobs);
  }
}
