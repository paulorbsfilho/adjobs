import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployerComponent } from './employer/employer.component';



@NgModule({
  declarations: [EmployerComponent],
  imports: [
    CommonModule
  ],
  exports: [EmployerComponent]
})
export class EmployerModule { }
