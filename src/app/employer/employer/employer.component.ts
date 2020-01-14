import { Component, OnInit } from '@angular/core';
import {EmployerService} from '../employer.service';
import {Employer} from '../../models/employer';
import {EmployerResponse} from '../../models/employer-response';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.css']
})
export class EmployerComponent implements OnInit {
  employersResponse: EmployerResponse;

  constructor(private employerService: EmployerService) { }

  ngOnInit() {
    this.getEmployersResponse();
  }

  getEmployersResponse(): void {
    this.employerService.getEmployersResponse()
      .subscribe(employersResponse => this.employersResponse = employersResponse);
  }

  goPrevious(previous) {
    this.employerService.goPrevious(previous)
      .subscribe(employersResponse => this.employersResponse = employersResponse);
  }

  goNext(next) {
    this.employerService.goNext(next)
      .subscribe(employersResponse => this.employersResponse = employersResponse);
  }
}
