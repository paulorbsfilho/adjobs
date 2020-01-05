import { Component, OnInit } from '@angular/core';
import {EmployerService} from '../employer.service';
import {Employer} from '../../models/employer';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.css']
})
export class EmployerComponent implements OnInit {
  selectedEmployer: Employer;
  employers: Employer[];

  constructor(private employerService: EmployerService) { }

  ngOnInit() {
    this.getEmployers();
  }

  onSelect(employer: Employer): void {
    this.selectedEmployer = employer;
  }

  getEmployers(): void {
    this.employerService.getEmployers()
      .subscribe(employers => this.employers = employers);
  }
}
