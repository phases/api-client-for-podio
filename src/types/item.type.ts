import { App } from './app.type';
import { Comment } from './comment.type';
import { CreatedBy } from './created-by.type';
import { CreatedVia } from './created-via.type';
import { CurrentRevision } from './current-revision.type';
import { File } from './file.type';
import { InitialRevision } from './initial-revision.type';
import { Revision } from './revision.type';
import {
  Category,
  Contact,
  Date,
  Duration,
  Email,
  Embed,
  Image,
  Location,
  Money,
  Number,
  Phone,
  Progress,
  Text,
} from './settings.type';
import { User } from './user.type';
import {
  CategoryValue,
  ContactValue,
  DateValue,
  DurationValue,
  EmailValue,
  EmbedValue,
  ImageValue,
  LocationValue,
  MoneyValue,
  NumberValue,
  PhoneValue,
  ProgressValue,
  TextValue,
} from './values.type';

export * from '../types/fieldvalue.type';

export type Item = {
  app: App;
  app_item_id: number;
  app_item_id_formatted: number;
  comments: Comment[];
  created_by: CreatedBy;
  created_on: string;
  created_via: CreatedVia;
  external_id?: null;
  fields: Field[];
  files: File[];
  invite?: null;
  is_liked: boolean;
  item_id: number;
  last_event_on: string;
  like_count: number;
  link: string;
  linked_account_data?: null;
  linked_account_id?: null;
  participants: any; //todo
  presence: Presence;
  priority: number;
  push: Push;
  ratings: Ratings;
  recurrence?: null;
  ref?: null;
  refs: Refs[];
  reminder?: null;
  revision: number;
  current_revision: CurrentRevision;
  initial_revision: InitialRevision;
  revisions: Revision[];
  rights: string[];
  sharefile_vault_folder_id?: null;
  sharefile_vault_url?: null;
  subscribed: boolean;
  subscribed_count: number;
  tags: string[];
  title: string;
  user_ratings: UserRatings;
};

export * from './meeting-url.type';

export type Field = {
  config: Config;
  external_id: string;
  field_id: number;
  label: string;
  status: string;
  type: string;
  values:
    | TextValue[]
    | CategoryValue[]
    | PhoneValue[]
    | EmailValue[]
    | ImageValue[]
    | ProgressValue[]
    | MoneyValue[]
    | LocationValue[]
    | DurationValue[]
    | DateValue[]
    | ContactValue[]
    | EmbedValue[]
    | NumberValue[];
};

export type Config = {
  default_value?: null;
  delta: number;
  description?: string | null;
  hidden: boolean;
  hidden_create_view_edit: boolean;
  label: string;
  mapping?: null;
  required: boolean;
  settings?:
    | null
    | Text
    | Category
    | Phone
    | Email
    | Image
    | Progress
    | Money
    | Location
    | Duration
    | Date
    | Contact
    | Embed
    | Number;
  unique: boolean;
  visible: boolean;
};

export type Presence = {
  user_id: number;
  signature: string;
  ref_type: string;
  ref_id: number;
};

export type Push = {
  channel: string;
  timestamp: number;
  signature: string;
  expires_in: number;
};

export type Ratings = {
  like: Like;
};

export type Like = {
  average?: null;
  counts: Counts;
};

export type Counts = {
  [key: number]: {
    total: number;
    users: User[];
  };
};

export type Refs = any; //todo

export type UserRatings = {
  like?: null;
};

export type BulkDelete = {
  deleted: number[];
  pending: number[];
};
