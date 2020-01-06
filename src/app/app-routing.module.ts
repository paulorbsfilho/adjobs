import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home/home.component';
import {CompanyComponent} from './company/company/company.component';
import {CandidateComponent} from './candidate/candidate/candidate.component';
import {EmployerComponent} from './employer/employer/employer.component';
import {AdvertisementJobComponent} from './advertisement-job/advertisement-job/advertisement-job.component';
import {EmployerDetailComponent} from './employer/employer-detail/employer-detail.component';
import {CandidateDetailComponent} from './candidate/candidate-detail/candidate-detail.component';
import {AdvertisementJobDetailComponent} from './advertisement-job/advertisement-job-detail/advertisement-job-detail.component';
import {CompanyDetailComponent} from './company/company-detail/company-detail.component';
import {AppComponent} from './app.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: AppComponent},
  {path: 'home', component: HomeComponent},
  {path: 'employers', component: EmployerComponent},
  {path: 'employers/detail/:id', component: EmployerDetailComponent},
  {path: 'candidates', component: CandidateComponent},
  {path: 'candidates/detail/:id', component: CandidateDetailComponent},
  {path: 'companies', component: CompanyComponent},
  {path: 'companies/detail/:id', component: CompanyDetailComponent},
  {path: 'jobs', component: AdvertisementJobComponent},
  {path: 'jobs/detail/:id', component: AdvertisementJobDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
