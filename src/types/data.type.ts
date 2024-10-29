import { App } from './app.type';
import { CreatedBy } from './created-by.type';
import { CreatedVia } from './created-via.type';
import { InitialRevision } from './initial-revision.type';
export type Data = {
  app: App;
  app_item_id: number;
  created_by: CreatedBy;
  created_on: string;
  created_via: CreatedVia;
  excerpt: Excerpt;
  item_id: number;
  link: string;
  revision: number;
  initial_revision: InitialRevision;
  sharefile_vault_folder_id?: null;
  sharefile_vault_url?: null;
  title: string;
};

export type Excerpt = {
  label: string;
  text: string;
};
