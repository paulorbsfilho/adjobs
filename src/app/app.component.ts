import {Component, OnInit} from '@angular/core';
import {AuthService} from './auth/auth.service';
import {Router} from '@angular/router';
import {AdvertisementJobService} from './advertisement-job/advertisement-job.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {JwksValidationHandler, OAuthService} from 'angular-oauth2-oidc';
import {Ng4LoadingSpinnerService} from 'ng4-loading-spinner';
import {AdvertisementJob} from './models/advertisement-job';
import {AdvertisementJobResponse} from './models/advertisement-job-response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  selectedAdvertisementJob: AdvertisementJob;
  advertisementJobsResponse: AdvertisementJobResponse;

  title = 'ADJobs';

  constructor(
    private route: Router,
    private advertisementJobService: AdvertisementJobService,
  ) {
  }

  ngOnInit(): void {
    this.getAdvertisementJobsResponse();
    }

  redirectToHome() {
    this.route.navigateByUrl('/home');
  }

  goHome() {
    if (true) {
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
}
