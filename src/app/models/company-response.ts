import {Company} from './company';

export class CompanyResponse {
  count: number;
  next: string;
  previous: string;
  results: Company[];
}
