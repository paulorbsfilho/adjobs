import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvertisementJobRoutingModule } from './advertisement-job-routing.module';
import { AdvertisementJobComponent } from './advertisement-job/advertisement-job.component';


@NgModule({
  declarations: [AdvertisementJobComponent],
  imports: [
    CommonModule,
    AdvertisementJobRoutingModule
  ],
  exports: [AdvertisementJobComponent]
})
export class AdvertisementJobModule { }
