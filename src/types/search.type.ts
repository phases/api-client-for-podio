import { CreatedBy } from './created-by.type';
import { App } from './app.type';
import { OrganizationType } from './organization.type';
import { Space } from './space.type';

export type Search = {
  type: string;
  id: number;
  title: string;
  created_on: string;
  link: string;
  search_id: number;
  rank: number;
  created_by?: CreatedBy;
  app?: App;
  org?: OrganizationType;
  space?: Space;
};

