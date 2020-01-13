import {User} from './user';

export class Candidate {
  pk: number;
  user: User;
  phone: string;
  academic_formation: string;
  institution: string;
  bio: string;
  knowledge: string;
}
