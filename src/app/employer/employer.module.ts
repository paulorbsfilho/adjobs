import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployerComponent } from './employer/employer.component';
import { EmployerRoutingModule } from './employer-routing.module';
import { EmployerDetailComponent } from './employer-detail/employer-detail.component';



@NgModule({
  declarations: [EmployerComponent, EmployerDetailComponent],
  imports: [
    CommonModule,
    EmployerRoutingModule
  ],
  exports: [EmployerComponent, EmployerDetailComponent]
})
export class EmployerModule { }
