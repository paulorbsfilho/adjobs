import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployerComponent } from './employer/employer.component';
import { EmployerRoutingModule } from './employer-routing.module';



@NgModule({
  declarations: [EmployerComponent],
  imports: [
    CommonModule,
    EmployerRoutingModule
  ],
  exports: [EmployerComponent]
})
export class EmployerModule { }
