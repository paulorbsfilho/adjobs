import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvertisementJobRoutingModule } from './advertisement-job-routing.module';
import { AdvertisementJobComponent } from './advertisement-job/advertisement-job.component';
import { AdvertisementJobDetailComponent } from './advertisement-job-detail/advertisement-job-detail.component';


@NgModule({
  declarations: [AdvertisementJobComponent, AdvertisementJobDetailComponent],
  imports: [
    CommonModule,
    AdvertisementJobRoutingModule
  ],
  exports: [AdvertisementJobComponent, AdvertisementJobDetailComponent]
})
export class AdvertisementJobModule { }
