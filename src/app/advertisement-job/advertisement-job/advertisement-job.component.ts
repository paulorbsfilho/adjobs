import {Component, OnInit} from '@angular/core';
import {AdvertisementJob} from '../../models/advertisement-job';
import {AdvertisementJobService} from '../advertisement-job.service';
import {AdvertisementJobResponse} from '../../models/advertisement-job-response';

@Component({
  selector: 'app-advertisement-job',
  templateUrl: './advertisement-job.component.html',
  styleUrls: ['./advertisement-job.component.css']
})
export class AdvertisementJobComponent implements OnInit {
  advertisementJobsResponse: AdvertisementJobResponse;

  p: number;
  private showJobs: boolean;

  constructor(private advertisementJobService: AdvertisementJobService) {
  }

  ngOnInit() {
    this.getAdvertisementJobsResponse();
    this.p = 1;
    this.showJobs = true;
  }

  getAdvertisementJobsResponse(): void {
    this.advertisementJobService.getAdvertisementJobsResponse()
      .subscribe(advertisementJobsResponse => this.advertisementJobsResponse = advertisementJobsResponse);
  }

  pageChanged(event) {
    this.p = event;
  }

  goPrevious(previous): void {
    this.advertisementJobService.goPrevious(previous)
      .subscribe(advertisementJobsResponse => this.advertisementJobsResponse = advertisementJobsResponse);
  }

  goNext(next) {
    this.advertisementJobService.goNext(next)
      .subscribe(advertisementJobsResponse => this.advertisementJobsResponse = advertisementJobsResponse);
  }

  advertiseJob(value: any) {
    return;
  }

  changeShowJobs() {
    this.showJobs = false;
  }
}
