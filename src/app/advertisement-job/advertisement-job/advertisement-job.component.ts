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

  constructor(private advertisementJobService: AdvertisementJobService) {
  }

  ngOnInit() {
    this.getAdvertisementJobs();
    this.getAdvertisementJobsResponse();
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

  goPrevious(previous: string) {
    return;
  }

  goNext(next: string) {
    return;
  }
}
