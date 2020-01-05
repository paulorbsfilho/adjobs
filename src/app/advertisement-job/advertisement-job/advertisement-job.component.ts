import {Component, OnInit} from '@angular/core';
import {AdvertisementJob} from '../../models/advertisement-job';
import {AdvertisementJobService} from '../advertisement-job.service';


@Component({
  selector: 'app-advertisement-job',
  templateUrl: './advertisement-job.component.html',
  styleUrls: ['./advertisement-job.component.css']
})
export class AdvertisementJobComponent implements OnInit {

  selectedAdvertisementJob: AdvertisementJob;
  advertisementJobs: AdvertisementJob[];

  constructor(private advertisementJobService: AdvertisementJobService) {
  }

  ngOnInit() {
    this.getAdvertisementJobs();
  }

  onSelect(advertisementJob: AdvertisementJob): void {
    this.selectedAdvertisementJob = advertisementJob;
  }

  getAdvertisementJobs(): void {
    this.advertisementJobService.getAdvertisementJobs()
      .subscribe(advertisementJobs => this.advertisementJobs = advertisementJobs);
  }
}
