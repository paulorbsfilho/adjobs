import {Candidate} from './candidate';

export class CandidateResponse {
  count: number;
  next: string;
  previous: string;
  results: Candidate[];
}
