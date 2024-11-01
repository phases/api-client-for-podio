import { CreatedBy } from './created-by.type';
import { CreatedVia } from './created-via.type';

export type File = {
  created_by?: CreatedBy;
  created_on?: string;
  created_via?: CreatedVia;
  description?: null;
  external_file_id?: null;
  file_id: number;
  hosted_by: string;
  hosted_by_humanized_name: string;
  link: string;
  link_target: string;
  mimetype: string;
  name: string;
  perma_link?: null;
  presence?: null;
  push?: null;
  replaces: string[];
  rights: string[];
  size: number;
  thumbnail_link: string;
};
