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
  selectedEmployer: Employer;
  employers: Employer[];
  employersResponse: EmployerResponse;

  constructor(private employerService: EmployerService) { }

  ngOnInit() {
    this.getEmployers();
    this.getEmployersResponse();
  }

  onSelect(employer: Employer): void {
    this.selectedEmployer = employer;
  }

  getEmployers(): void {
    this.employerService.getEmployers()
      .subscribe(employers => this.employers = employers);
  }

  getEmployersResponse(): void {
    this.employerService.getEmployersResponse()
      .subscribe(employersResponse => this.employersResponse = employersResponse);
  }

  goPrevious(previous: string) {
    return;
  }

  goNext(next: string) {
    return;
  }
}
