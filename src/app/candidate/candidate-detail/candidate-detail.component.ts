import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Candidate} from '../../models/candidate';
import {CandidateService} from '../candidate.service';

@Component({
  selector: 'app-candidate-detail',
  templateUrl: './candidate-detail.component.html',
  styleUrls: ['./candidate-detail.component.css']
})
export class CandidateDetailComponent implements OnInit {
  candidate: Candidate;

  constructor(
    private route: ActivatedRoute,
    private candidateService: CandidateService,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    this.getCandidate();
  }

  getCandidate(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.candidateService.getCandidate(id)
      .subscribe(candidate => this.candidate = candidate);
  }

  goBack(): void {
    this.location.back();
  }

  delete() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.candidateService.deleteCandidate(id)
      .subscribe(candidate => this.candidate = candidate);
    this.goBack();
  }

}
