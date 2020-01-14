import { Component, OnInit } from '@angular/core';
import {AdvertisementJobResponse} from '../../models/advertisement-job-response';
import {AdvertisementJobService} from '../../advertisement-job/advertisement-job.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  advertisementJobsResponse: AdvertisementJobResponse;
  title = 'ADJobs';

  constructor(private advertisementJobService: AdvertisementJobService) { }

  ngOnInit() {
    this.getAdvertisementJobsResponse();
  }

  getAdvertisementJobsResponse(): void {
    this.advertisementJobService.getAdvertisementJobsResponse()
      .subscribe(advertisementJobsResponse => this.advertisementJobsResponse = advertisementJobsResponse);
  }

  goPrevious(previous) {
    this.advertisementJobService.goPrevious(previous)
      .subscribe(advertisementJobsResponse => this.advertisementJobsResponse = advertisementJobsResponse);
  }

  goNext(next) {
    this.advertisementJobService.goPrevious(next)
      .subscribe(advertisementJobsResponse => this.advertisementJobsResponse = advertisementJobsResponse);
  }

}
