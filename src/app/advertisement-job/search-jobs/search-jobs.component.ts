import { Component, OnInit, Input} from '@angular/core';
import {AdvertisementJobResponse} from '../../models/advertisement-job-response';
import {User} from '../../models/user';
import {Router} from '@angular/router';
import {AdvertisementJobService} from '../advertisement-job.service';

@Component({
  selector: 'app-search-jobs',
  templateUrl: './search-jobs.component.html',
  styleUrls: ['./search-jobs.component.css']
})
export class SearchJobsComponent implements OnInit {
  advertisementJobsResponse: AdvertisementJobResponse;
  user: User;

  constructor(private route: Router,
              private advertisementJobService: AdvertisementJobService) { }

  ngOnInit() {
    this.advertisementJobService.emitAdvertisementJobs
      .subscribe(advertisementJobsResponse => this.advertisementJobsResponse = advertisementJobsResponse);
  }

  goPrevious(previous): void {
    this.advertisementJobService.goPrevious(previous)
      .subscribe(advertisementJobsResponse => this.advertisementJobsResponse = advertisementJobsResponse);
  }

  goNext(next) {
    this.advertisementJobService.goNext(next)
      .subscribe(advertisementJobsResponse => this.advertisementJobsResponse = advertisementJobsResponse);
  }

}
