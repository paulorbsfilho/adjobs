import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AdvertisementJobService} from './advertisement-job/advertisement-job.service';
import {AdvertisementJob} from './models/advertisement-job';
import {AdvertisementJobResponse} from './models/advertisement-job-response';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { OAuthService } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc';
import {authConfig} from './auth/oauth.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  searchForm: FormGroup;
  selectedAdvertisementJob: AdvertisementJob;
  advertisementJobsResponse: AdvertisementJobResponse;

  title = 'ADJobs';

  constructor(
    private route: Router,
    private advertisementJobService: AdvertisementJobService,
    private oauthService: OAuthService
  ) {
    this.configure();
  }

  ngOnInit(): void {
    this.getAdvertisementJobsResponse();
    this.searchForm = new FormGroup({
      term: new FormControl('', Validators.required)
    });
    }

  private configure() {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin({
      onTokenReceived: context => {
        // tslint:disable-next-line:no-console
        console.debug('Logged in');
        // tslint:disable-next-line:no-console
        console.debug(context);
      }
    });
  }

  // login () {
  //   this.oauthService.initImplicitFlow();
  // }
  //
  // logout() {
  //   this.oauthService.logOut();
  // }
  //
  // get token() {
  //   const claims: any = this.oauthService.getIdentityClaims();
  //   return claims ? claims : null;
  // }

  redirectToHome() {
    this.route.navigateByUrl('/home');
  }

  goHome() {
    if (this.advertisementJobsResponse) {
      this.redirectToHome();
    }
  }

  onSelect(advertisementJob: AdvertisementJob): void {
    this.selectedAdvertisementJob = advertisementJob;
  }

  getAdvertisementJobsResponse(): void {
    this.advertisementJobService.getAdvertisementJobsResponse()
      .subscribe(advertisementJobsResponse => this.advertisementJobsResponse = advertisementJobsResponse);
  }

  searchJob(term) {
    return;
  }

}
