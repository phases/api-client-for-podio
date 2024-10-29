import { CreatedBy } from './created-by.type';
import { CreatedVia } from './created-via.type';
import { InitialRevision } from './initial-revision.type';
import { App } from './app.type';
import { Push } from './user.type';

export interface File {
  created_by: CreatedBy;
  created_on: string;
  created_via: CreatedVia;
  description: null;
  external_file_id: null;
  file_id: number;
  hosted_by: string;
  hosted_by_humanized_name: string;
  is_liked?: null;
  like_count?: null;
  link: string;
  link_target: string;
  mimetype: string;
  name: string;
  perma_link: null;
  presence: null;
  push: null | Push;
  replaces: string[];
  rights: string[];
  size: number;
  thumbnail_link: string;
  subscribed?: null;
  subscribed_count?: null;
}

export interface Files extends File {
  context: Context;
}

export type Context = {
  created_by: CreatedBy;
  created_on: string;
  created_via: CreatedVia;
  data: data;
  id: number;
  link: string;
  title: string;
  type: string;
  type_name: string;
};

type data = {
  app: App;
  app_item_id: number;
  created_by: CreatedBy;
  created_on: string;
  created_via: CreatedVia;
  excerpt: excerpt;
  item_id: number;
  link: string;
  revision: number;
  initial_revision: InitialRevision;
  sharefile_vault_folder_id?: null;
  sharefile_vault_url?: null;
  title: string;
};
type excerpt = {
  label: string;
  text: string;
};
