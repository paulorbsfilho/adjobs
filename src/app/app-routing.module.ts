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
import {AuthComponent} from './auth/auth/auth.component';
import {AppComponent} from './app.component';
import {AuthGuard} from './auth/auth.guard';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'auth', component: AuthComponent},
  {path: 'employers', component: EmployerComponent},
  {path: 'employers/detail/:id', component: EmployerDetailComponent},
  {path: 'candidates', component: CandidateComponent},
  {path: 'candidates/detail/:id', component: CandidateDetailComponent},
  {path: 'companies', component: CompanyComponent},
  {path: 'companies/detail/:id', component: CompanyDetailComponent},
  {path: 'jobs', component: AdvertisementJobComponent},
  {path: 'jobs/detail/:id', component: AdvertisementJobDetailComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
