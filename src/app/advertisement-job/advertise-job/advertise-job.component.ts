import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AdvertisementJobService} from '../advertisement-job.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-advertise-job',
  templateUrl: './advertise-job.component.html',
  styleUrls: ['./advertise-job.component.css']
})
export class AdvertiseJobComponent implements OnInit {
  advertiseForm: FormGroup;
  private successTextAlert: string;
  private errorTextAlert: any;

  constructor(private advertisementJobService: AdvertisementJobService,
              private route: Router) { }

  ngOnInit() {
    this.advertiseForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      requirements: new FormControl('', Validators.required),
      desirable: new FormControl('', Validators.required),
      payment: new FormControl('', Validators.required),
      company: new FormControl('', Validators.required),
    });
  }

  advertiseJob1(advertiseInfo) {
    this.advertisementJobService.advertiseJob(advertiseInfo).subscribe(
      response => {
        this.successTextAlert = 'Usuário criado, entre utilizando suas credenciais.';
      },
      error => {
        this.errorTextAlert = error;
      }
    );
    this.redirectToHome();
  }

  redirectToHome() {
    this.route.navigateByUrl('/home');
  }
}
