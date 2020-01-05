import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company/company.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [CompanyComponent, CompanyDetailComponent],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    FormsModule
  ],
  exports: [CompanyComponent, CompanyDetailComponent]
})
export class CompanyModule { }
