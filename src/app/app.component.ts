import {Component, OnInit} from '@angular/core';
import {AuthService} from './auth/auth.service';
import {Router} from '@angular/router';
import {AdvertisementJobService} from './advertisement-job/advertisement-job.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ADJobs';
  loginForm: FormGroup;
  registerEmployerForm: FormGroup;
  registerCandidateForm: FormGroup;
  successTextAlert: string;
  errorTextAlert: string;

  constructor(
    private route: Router,
    private authService: AuthService,
    private advertisementJobService: AdvertisementJobService,
    ) {
  }

  ngOnInit(): void {
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
}
