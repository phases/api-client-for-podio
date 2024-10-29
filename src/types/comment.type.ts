import { CreatedBy } from './created-by.type';
import { CreatedVia } from './created-via.type';
import { File } from './file.type';
import { User } from './user.type';

export type Comment = {
  comment_id: number;
  created_by: CreatedBy;
  created_on: string;
  created_via: CreatedVia;
  embed: null;
  embed_file?: null;
  external_id?: null;
  files: File[];
  is_liked: boolean;
  last_edit_on: null;
  like_count: number;
  questions: string[];
  ref: Ref;
  rich_value: string;
  rights: string[];
  user: User;
  value: string;
};

export type Ref = {
  type: string;
  id: number;
};

export type Revision = {
  created_on: string;
  embed?: null;
  embed_file?: null;
  rich_value: string;
  value: string;
};
