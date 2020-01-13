import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Company} from '../../models/company';
import {CompanyService} from '../company.service';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {
  company: Company;

  constructor(
    private route: ActivatedRoute,
    private companyService: CompanyService,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    this.getCompany();
  }

  getCompany(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.companyService.getCompany(id)
      .subscribe(company => this.company = company);
  }

  goBack(): void {
    this.location.back();
  }

  delete() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.companyService.deleteCompany(id)
      .subscribe(company => this.company = company);
    this.goBack();
  }

}
