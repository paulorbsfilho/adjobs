import {Component, OnInit} from '@angular/core';
import {Company} from '../../models/company';
import {CompanyService} from '../company.service';
import {CompanyResponse} from '../../models/company-response';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  selectedCompany: Company;
  companies: Company[];
  companiesResponse: CompanyResponse;

  companyForm: FormGroup;

  showForm: boolean;
  private successTextAlert: string;
  private errorTextAlert: string;

  constructor(private companyService: CompanyService,
              private route: Router) {
  }

  ngOnInit() {
    this.getCompanies();
    this.getCompaniesResponse();
    this.showForm = false;
    this.companyForm = new FormGroup({
      companyName: new FormControl('', Validators.required),
      catchPhrase: new FormControl('', Validators.required),
      about: new FormControl('', Validators.required),
    });
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

  registerCompany(companyInfo): void {
    this.companyService.companyRegister(companyInfo).subscribe(
      response => {
        this.successTextAlert = 'Usuário criado, entre utilizando suas credenciais.';
      },
      error => {
        this.errorTextAlert = error;
      }
    );
    this.showCompanyForm();
  }

  goPrevious(previous): void {
    this.companyService.goPrevious(previous)
      .subscribe(companiesResponse => this.companiesResponse = companiesResponse);
  }

  goNext(next) {
    this.companyService.goNext(next)
      .subscribe(companiesResponse => this.companiesResponse = companiesResponse);
  }

  showCompanyForm() {
    this.showForm = !this.showForm;
  }

  redirectToHome() {
    this.route.navigateByUrl('/home');
  }
}
