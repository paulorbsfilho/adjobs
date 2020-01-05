import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company/company.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';


@NgModule({
  declarations: [CompanyComponent, CompanyDetailComponent],
  imports: [
    CommonModule,
    CompanyRoutingModule
  ],
  exports: [CompanyComponent, CompanyDetailComponent]
})
export class CompanyModule { }
