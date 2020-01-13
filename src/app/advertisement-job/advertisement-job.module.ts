import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdvertisementJobRoutingModule} from './advertisement-job-routing.module';
import {AdvertisementJobComponent} from './advertisement-job/advertisement-job.component';
import {AdvertisementJobDetailComponent} from './advertisement-job-detail/advertisement-job-detail.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {AdvertiseJobComponent} from './advertise-job/advertise-job.component';


@NgModule({
  declarations: [AdvertisementJobComponent, AdvertisementJobDetailComponent, AdvertiseJobComponent],
  imports: [
    CommonModule,
    AdvertisementJobRoutingModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  exports: [AdvertisementJobComponent, AdvertisementJobDetailComponent, AdvertiseJobComponent]
})
export class AdvertisementJobModule {
}
