import {Employer} from './employer';

export class Company {
  pk: number;
  company_name: string;
  owner: Employer;
  catchPhrase: string;
  about: string;
}
