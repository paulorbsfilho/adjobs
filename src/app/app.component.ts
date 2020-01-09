import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AdvertisementJobService} from './advertisement-job/advertisement-job.service';
import {AdvertisementJob} from './models/advertisement-job';
import {AdvertisementJobResponse} from './models/advertisement-job-response';
import {FormControl, FormGroup, Validators} from '@angular/forms';

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
  ) {
  }

  ngOnInit(): void {
    this.getAdvertisementJobsResponse();
    this.searchForm = new FormGroup({
      term: new FormControl('', Validators.required)
    });
    }

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
