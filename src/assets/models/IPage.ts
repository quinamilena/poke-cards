import { ICards } from './ICards';

export interface IPage {
  data: Array<ICards>;
  page: number;
  pageSize: number;
  count: number;
  totalCount: number;
}
