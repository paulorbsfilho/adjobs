import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {AdvertisementJob} from '../../models/advertisement-job';
import {AdvertisementJobService} from '../advertisement-job.service';

@Component({
  selector: 'app-advertisement-job-detail',
  templateUrl: './advertisement-job-detail.component.html',
  styleUrls: ['./advertisement-job-detail.component.css']
})
export class AdvertisementJobDetailComponent implements OnInit {
  advertisementJob: AdvertisementJob;

  constructor(
    private route: ActivatedRoute,
    private advertisementJobService: AdvertisementJobService,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    this.getAdvertisementJob();
  }

  getAdvertisementJob(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.advertisementJobService.getAdvertisementJob(id)
      .subscribe(advertisementJob => this.advertisementJob = advertisementJob);
  }

  goBack(): void {
    this.location.back();
  }

}
