import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidateRoutingModule } from './candidate-routing.module';
import { CandidateComponent } from './candidate/candidate.component';


@NgModule({
  declarations: [CandidateComponent],
  imports: [
    CommonModule,
    CandidateRoutingModule
  ],
  exports: [CandidateComponent]
})
export class CandidateModule { }
