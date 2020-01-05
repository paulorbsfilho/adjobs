import {Component, OnInit} from '@angular/core';
import {Candidate} from '../../models/candidate';
import {CandidateService} from '../candidate.service';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {
  selectedCandidate: Candidate;
  candidates: Candidate[];

  constructor(private candidateService: CandidateService) {
  }

  ngOnInit() {
    this.getCompanies();
  }

  onSelect(candidate: Candidate): void {
    this.selectedCandidate = candidate;
  }

  getCompanies(): void {
    this.candidateService.getCandidates()
      .subscribe(candidates => this.candidates = candidates);
  }
}
