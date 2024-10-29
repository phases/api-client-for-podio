import { CreatedBy } from './created-by.type';
import { CreatedVia } from './created-via.type';
import { Data } from './data.type';

export type Reference = {
  created_by: CreatedBy;
  created_on: string;
  created_via: CreatedVia;
  data: Data;
  id: number;
  link: string;
  title: string;
  type: string;
  type_name: string;
};
