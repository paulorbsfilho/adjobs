import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EmployerService} from '../employer.service';
import {Employer} from '../../models/employer';
import { Location } from '@angular/common';

@Component({
  selector: 'app-employer-detail',
  templateUrl: './employer-detail.component.html',
  styleUrls: ['./employer-detail.component.css']
})
export class EmployerDetailComponent implements OnInit {
  employer: Employer;

  constructor(
    private route: ActivatedRoute,
    private employerService: EmployerService,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    this.getEmployer();
  }

  getEmployer(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.employerService.getEmployer(id)
      .subscribe(employer => this.employer = employer);
  }

  goBack(): void {
    this.location.back();
  }
}
