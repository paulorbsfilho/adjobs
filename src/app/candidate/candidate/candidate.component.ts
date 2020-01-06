import {Component, OnInit} from '@angular/core';
import {Candidate} from '../../models/candidate';
import {CandidateService} from '../candidate.service';
import {CandidateResponse} from '../../models/candidate-response';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {
  selectedCandidate: Candidate;
  candidates: Candidate[];
  candidatesResponse: CandidateResponse;

  constructor(private candidateService: CandidateService) {
  }

  ngOnInit() {
    this.getCompanies();
    this.getCompaniesResponse();
  }

  onSelect(candidate: Candidate): void {
    this.selectedCandidate = candidate;
  }

  getCompanies(): void {
    this.candidateService.getCandidates()
      .subscribe(candidates => this.candidates = candidates);
  }

  getCompaniesResponse(): void {
    this.candidateService.getCandidatesResponse()
      .subscribe(candidates => this.candidatesResponse = candidates);
  }

  goPrevious(previous: string) {
    return;
  }

  goNext(next: string) {
    return;
  }
}
