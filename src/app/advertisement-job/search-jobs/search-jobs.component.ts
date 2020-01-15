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
  // tslint:disable-next-line:no-input-rename
  @Input('advertisementJobsResponse') advertisementJobsResponse: AdvertisementJobResponse;
  // tslint:disable-next-line:no-input-rename
  @Input('user')user: User;

  constructor(private route: Router,
              private advertisementJobService: AdvertisementJobService) { }

  ngOnInit() {
  }

  goPrevious(re: string) {
    return;
  }

  goNext(next: string) {
    return;
  }

  searchJob() {

  }

}
