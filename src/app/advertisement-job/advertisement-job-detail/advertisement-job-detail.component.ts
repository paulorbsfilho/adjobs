import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {AdvertisementJob} from '../../models/advertisement-job';
import {AdvertisementJobService} from '../advertisement-job.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-advertisement-job-detail',
  templateUrl: './advertisement-job-detail.component.html',
  styleUrls: ['./advertisement-job-detail.component.css']
})
export class AdvertisementJobDetailComponent implements OnInit {
  advertisementJob: AdvertisementJob;

  editAdvertisementJob: FormGroup;
  private successTextAlert: string;
  private errorTextAlert: any;
  private show: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private advertisementJobService: AdvertisementJobService,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    this.show = false;
    this.getAdvertisementJob();
    this.editAdvertisementJob = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      requirements: new FormControl('', Validators.required),
      desirable: new FormControl('', Validators.required),
      payment: new FormControl('', Validators.required),
      company: new FormControl('', Validators.required),
    });
  }

  getAdvertisementJob(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.advertisementJobService.getAdvertisementJob(id)
      .subscribe(advertisementJob => this.advertisementJob = advertisementJob);
  }

  goBack(): void {
    this.location.back();
  }

  delete() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.advertisementJobService.deleteAdvertisementJob(id)
      .subscribe(advertisementJob => this.advertisementJob = advertisementJob);
    this.goBack();
  }

  updateJob(jobInfo: AdvertisementJob) {
    const id = +this.route.snapshot.paramMap.get('id');
    this.advertisementJobService.updateAdvertisementJob(id, jobInfo).subscribe(
      response => {
        this.successTextAlert = 'Usuário criado, entre utilizando suas credenciais.';
      },
      error => {
        this.errorTextAlert = error;
      }
    );
   this.goBack();
  }

  showForm() {
    this.show = !this.show;
  }
}
