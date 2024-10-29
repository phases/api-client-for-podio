import { CreatedBy } from './created-by.type';
import { CreatedVia } from './created-via.type';
import { User } from './user.type';

export type CurrentRevision = {
  created_by: CreatedBy;
  created_on: string;
  created_via: CreatedVia;
  item_revision_id: number;
  revision: number;
  type: string;
  user: User;
};
