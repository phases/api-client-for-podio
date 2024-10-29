import { Contact } from './contact.type';
import { CreatedBy } from './created-by.type';
import { Context } from './file.type';

export type CreateAttributes = {
  people: any;
  action: 'view' | 'comment' | 'rate';
  message: string;
  access_level: 'edit' | 'view';
};

export type UpdateAttributes = {
  access_level: 'edit' | 'view';
};

export type Grants = {
  access_level: string;
  created_on: string;
  grant_id: number;
  rights: string[];
  user: Contact;
  ref?: Context;
  message?: string | null;
  action?: null;
  created_by?: CreatedBy;
};
