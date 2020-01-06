import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdvertisementJobComponent} from './advertisement-job/advertisement-job.component';
import {AdvertisementJobDetailComponent} from './advertisement-job-detail/advertisement-job-detail.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvertisementJobRoutingModule { }
