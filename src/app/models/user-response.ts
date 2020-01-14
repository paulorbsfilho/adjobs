import {User} from './user';

export class UserResponse {
  count: number;
  next: string;
  previous: string;
  results: User[];
}
