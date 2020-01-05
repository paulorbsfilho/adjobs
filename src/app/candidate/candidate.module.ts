import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidateRoutingModule } from './candidate-routing.module';
import { CandidateComponent } from './candidate/candidate.component';
import { CandidateDetailComponent } from './candidate-detail/candidate-detail.component';


@NgModule({
  declarations: [CandidateComponent, CandidateDetailComponent],
  imports: [
    CommonModule,
    CandidateRoutingModule
  ],
  exports: [CandidateComponent, CandidateDetailComponent]
})
export class CandidateModule { }
