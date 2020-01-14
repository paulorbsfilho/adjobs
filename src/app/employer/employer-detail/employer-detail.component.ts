import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EmployerService} from '../employer.service';
import {Employer} from '../../models/employer';
import { Location } from '@angular/common';
import {AdvertisementJob} from '../../models/advertisement-job';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Company} from '../../models/company';

@Component({
  selector: 'app-employer-detail',
  templateUrl: './employer-detail.component.html',
  styleUrls: ['./employer-detail.component.css']
})
export class EmployerDetailComponent implements OnInit {
  employer: Employer;
  company: Company;
  private successTextAlert: string;
  private errorTextAlert: string;

  editEmployer: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private employerService: EmployerService,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    this.getEmployer();
    this.editEmployer = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
    });
  }

  getEmployer(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.employerService.getEmployer(id)
      .subscribe(employer => this.employer = employer);
  }

  goBack(): void {
    this.location.back();
  }

  updateJob(employerInfo: Employer) {
    const id = +this.route.snapshot.paramMap.get('id');
    this.employerService.updateEmployer(id, employerInfo).subscribe(
      response => {
        this.successTextAlert = 'Usuário criado, entre utilizando suas credenciais.';
      },
      error => {
        this.errorTextAlert = error;
      }
    );
    this.goBack();
  }

  delete() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.employerService.deleteEmployer(id)
      .subscribe(employer => this.employer = employer);
    this.goBack();
  }
}
