import {Component, EventEmitter, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AdvertisementJobService} from './advertisement-job/advertisement-job.service';
import {AdvertisementJob} from './models/advertisement-job';
import {AdvertisementJobResponse} from './models/advertisement-job-response';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from './user/user.service';
import {User} from './models/user';

// @ts-ignore
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  searchForm: FormGroup;
  advertisementJobsResponse: AdvertisementJobResponse;
  user: User;
  login: boolean;
  title = 'ADJobs';

  constructor(
    private route: Router,
    private advertisementJobService: AdvertisementJobService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.login = false;
    this.getAdvertisementJobsResponse();
    this.searchForm = new FormGroup({
      term: new FormControl('', Validators.required)
    });
    }

  redirectToHome() {
    this.route.navigateByUrl('/home');
  }

  currentUser () {
    this.userService.currentUser()
      .subscribe(user => this.user = user);
  }

  getAdvertisementJobsResponse(): void {
    this.advertisementJobService.getAdvertisementJobsResponse()
      .subscribe(advertisementJobsResponse => this.advertisementJobsResponse = advertisementJobsResponse);
  }

  searchJob(search) {
    this.advertisementJobService.searchAdvertisementJobsResponse(search)
      .subscribe(advertisementJobsResponse => this.advertisementJobsResponse = advertisementJobsResponse);
    this.advertisementJobService.emitAdvertisementJobs.emit(this.advertisementJobsResponse);
    this.route.navigateByUrl('/search-jobs');
  }

}
