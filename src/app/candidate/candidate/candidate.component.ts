import {Component, OnInit} from '@angular/core';
import {CandidateService} from '../candidate.service';
import {CandidateResponse} from '../../models/candidate-response';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {
  candidatesResponse: CandidateResponse;

  constructor(private candidateService: CandidateService) {
  }

  ngOnInit() {
    this.getCandidatesResponse();
  }

  getCandidatesResponse(): void {
    this.candidateService.getCandidatesResponse()
      .subscribe(candidates => this.candidatesResponse = candidates);
  }

  goPrevious(previous): void {
      this.candidateService.goPrevious(previous)
      .subscribe(candidatesResponse => this.candidatesResponse = candidatesResponse);
  }

  goNext(next) {
    this.candidateService.goNext(next)
      .subscribe(candidatesResponse => this.candidatesResponse = candidatesResponse);
  }
}
