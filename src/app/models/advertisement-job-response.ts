import {AdvertisementJob} from './advertisement-job';

export class AdvertisementJobResponse {
  count: number;
  next: string;
  previous: string;
  results: AdvertisementJob[];
}
