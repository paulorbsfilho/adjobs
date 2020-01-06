import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EmployerComponent} from './employer/employer.component';
import {EmployerDetailComponent} from './employer-detail/employer-detail.component';


const routes: Routes = [
  {path: 'employers', component: EmployerComponent},
  {path: 'employer-detail/:id', component: EmployerDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployerRoutingModule { }
