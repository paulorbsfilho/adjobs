import {Component, OnInit} from '@angular/core';
import {Company} from '../../models/company';
import {CompanyService} from '../company.service';
import {CompanyResponse} from '../../models/company-response';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  selectedCompany: Company;
  companies: Company[];
  companiesResponse: CompanyResponse;

  constructor(private companyService: CompanyService) {
  }

  ngOnInit() {
    this.getCompanies();
    this.getCompaniesResponse();
  }

  onSelect(company: Company): void {
    this.selectedCompany = company;
  }

  getCompanies(): void {
    this.companyService.getCompanies()
      .subscribe(companies => this.companies = companies);
  }

  getCompaniesResponse(): void {
    this.companyService.getCompaniesResponse()
      .subscribe(companiesResponse => this.companiesResponse = companiesResponse);
  }

  goPrevious(previous: string) {
    return;
  }

  goNext(next: string) {
    return;
  }
}
