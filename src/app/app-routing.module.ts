import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home/home.component';
import {CompanyComponent} from './company/company/company.component';
import {CandidateComponent} from './candidate/candidate/candidate.component';
import {EmployerComponent} from './employer/employer/employer.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'employers', component: EmployerComponent},
  {path: 'candidates', component: CandidateComponent},
  {path: 'companies', component: CompanyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
