import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvertisementJobRoutingModule } from './advertisement-job-routing.module';
import { AdvertisementJobComponent } from './advertisement-job/advertisement-job.component';
import { AdvertisementJobDetailComponent } from './advertisement-job-detail/advertisement-job-detail.component';
import {FormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [AdvertisementJobComponent, AdvertisementJobDetailComponent],
    imports: [
        CommonModule,
        AdvertisementJobRoutingModule,
        FormsModule,
        NgxPaginationModule
    ],
  exports: [AdvertisementJobComponent, AdvertisementJobDetailComponent]
})
export class AdvertisementJobModule { }
