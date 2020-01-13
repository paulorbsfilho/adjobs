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

  selectedAdvertisementJob: AdvertisementJob;
  advertisementJobs: AdvertisementJob[];
  advertisementJobsResponse: AdvertisementJobResponse;

  p: number;

  constructor(private advertisementJobService: AdvertisementJobService) {
  }

  ngOnInit() {
    this.getAdvertisementJobs();
    this.getAdvertisementJobsResponse();
    this.p = 1;
  }

  onSelect(advertisementJob: AdvertisementJob): void {
    this.selectedAdvertisementJob = advertisementJob;
  }

  getAdvertisementJobs(): void {
    this.advertisementJobService.getAdvertisementJobs()
      .subscribe(advertisementJobs => this.advertisementJobs = advertisementJobs);
  }

  getAdvertisementJobsResponse(): void {
    this.advertisementJobService.getAdvertisementJobsResponse()
      .subscribe(advertisementJobsResponse => this.advertisementJobsResponse = advertisementJobsResponse);
  }

  pageChanged(event) {
    this.p = event;
  }

  goPrevious(previous: string) {
    this.advertisementJobService.goPrevious(previous)
      .subscribe(advertisementJobs => this.advertisementJobs = advertisementJobs);
  }

  goNext(next: string) {
    this.advertisementJobService.goPrevious(next)
      .subscribe(advertisementJobs => this.advertisementJobs = advertisementJobs);
  }
}
