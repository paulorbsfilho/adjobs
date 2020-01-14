import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Company} from '../../models/company';
import {CompanyService} from '../company.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AdvertisementJob} from '../../models/advertisement-job';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {
  company: Company;

  editCompany: FormGroup;
  private successTextAlert: string;
  private errorTextAlert: string;
  private show: boolean;

  constructor(
    private route: ActivatedRoute,
    private companyService: CompanyService,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    this.getCompany();
    this.editCompany = new FormGroup({
      companyName: new FormControl('', Validators.required),
      catchPhrase: new FormControl('', Validators.required),
      about: new FormControl('', Validators.required),
      owner: new FormControl('', Validators.required),
    });
  }

  getCompany(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.companyService.getCompany(id)
      .subscribe(company => this.company = company);
  }

  goBack(): void {
    this.location.back();
  }

  updateCompany(companyInfo: Company) {
    const id = +this.route.snapshot.paramMap.get('id');
    this.companyService.updateCompany(id, companyInfo).subscribe(
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
    this.companyService.deleteCompany(id)
      .subscribe(company => this.company = company);
    this.goBack();
  }

  showForm() {
    this.show = !this.show;
  }

}
