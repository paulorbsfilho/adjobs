import {Employer} from './employer';

export class EmployerResponse {
  count: number;
  next: string;
  previous: string;
  results: Employer[];
}
