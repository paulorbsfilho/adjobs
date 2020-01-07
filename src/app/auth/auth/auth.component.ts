import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {JwksValidationHandler, OAuthService} from 'angular-oauth2-oidc';
import {Ng4LoadingSpinnerService} from 'ng4-loading-spinner';
import {AdvertisementJob} from '../../models/advertisement-job';
import {AdvertisementJobResponse} from '../../models/advertisement-job-response';
import {AuthService} from '../auth.service';
import {AdvertisementJobService} from '../../advertisement-job/advertisement-job.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  selectedAdvertisementJob: AdvertisementJob;
  advertisementJobsResponse: AdvertisementJobResponse;

  oauth2Token: string;
  title = 'ADJobs';
  loginForm: FormGroup;
  registerEmployerForm: FormGroup;
  registerCandidateForm: FormGroup;
  successTextAlert: string;
  errorTextAlert: string;

  text = 'Sou candidato';
  employer = false;

  constructor(
    private route: Router,
    private authService: AuthService,
    private advertisementJobService: AdvertisementJobService,
    private spinner: Ng4LoadingSpinnerService,
  ) {
  }

  ngOnInit(): void {
    this.getAdvertisementJobsResponse();
    this.oauth2Token = window.localStorage.getItem('oauth2');
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
    this.registerEmployerForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      companyName: new FormControl('', Validators.required),
      catchPhrase: new FormControl('', Validators.required),
      about: new FormControl('', Validators.required),
    });
    this.registerCandidateForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      academicFormation: new FormControl('', Validators.required),
      institution: new FormControl('', Validators.required),
      bio: new FormControl('', Validators.required),
      knowledge: new FormControl('', Validators.required),
    });
  }

  redirectToHome() {
    this.route.navigateByUrl('/home');
  }

  goHome() {
    if (this.oauth2Token) {
      this.redirectToHome();
    }
  }

  onSelect(advertisementJob: AdvertisementJob): void {
    this.selectedAdvertisementJob = advertisementJob;
  }

  getAdvertisementJobsResponse(): void {
    this.advertisementJobService.getAdvertisementJobsResponse()
      .subscribe(advertisementJobsResponse => this.advertisementJobsResponse = advertisementJobsResponse);
  }

  signIn(value: any) {
    return;
  }

  register(registerCredentials) {
    this.spinner.show();
    this.authService.doEmployerRegister(registerCredentials).subscribe(
      response => {
        this.successTextAlert = 'Usuário criado, entre utilizando suas credenciais.';
        this.spinner.hide();
      },
      error => {
        this.errorTextAlert = error;
        this.spinner.hide();
      }
    );
  }

  closeSuccessTextAlert() {
    this.successTextAlert = '';
  }

  closeErrorTextAlert() {
    this.errorTextAlert = '';
  }

  changeText(): void {
    this.employer = !this.employer;
    if (this.employer) {
      this.text = 'Sou Empresário';
    }
    if (!this.employer) {
      this.text = 'Sou candidato';
    }
  }
}
