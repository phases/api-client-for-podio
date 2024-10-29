import { Image as ImageType } from '../types/image.type';
import { AccountingInfo } from '../types/app.type';

import {
  Text,
  Category,
  Email,
  Phone,
  Image,
  Progress,
  Money,
  Location,
  Duration,
  Date,
  Contact,
  Embed,
  Number,
} from './settings.type';
export type Application = {
  app_id: number;
  config: Config;
  current_revision: number;
  default_view_id?: null;
  fields: Fields[];
  integration?: null;
  is_default: boolean;
  item_accounting_info: AccountingInfo;
  layouts: Layouts;
  link: string;
  link_add: string;
  original: number;
  original_revision: number;
  owner: Owner;
  rights: string[];
  sharefile_vault_url?: null;
  space_id: number;
  status: number;
  subscribed: boolean;
  url_add: string;
  url: string;
  url_label: string;
  token?: null;
  mailbox?: null;
};

export type Config = {
  allow_attachments: boolean;
  allow_comments: boolean;
  allow_create: boolean;
  allow_edit: boolean;
  allow_tags: boolean;
  app_item_id_padding: number;
  app_item_id_prefix: string;
  approved: boolean;
  calendar_color_category_field_id?: null;
  default_view: string;
  description?: null;
  disable_notifications: boolean;
  external_id?: null;
  fivestar: boolean;
  fivestar_label?: null;
  icon: string;
  icon_id: number;
  item_name: string;
  name: string;
  rsvp: boolean;
  rsvp_label?: null;
  show_app_item_id: boolean;
  silent_creates: boolean;
  silent_edits: boolean;
  tasks: string[];
  thumbs: boolean;
  thumbs_label?: null;
  type: string;
  usage?: null;
  yesno: boolean;
  yesno_label?: null;
};

export type Fields = {
  config: FieldConfig;
  external_id: string;
  field_id: number;
  label: string;
  status: string;
  type: string;
};

export type FieldConfig = {
  default_value?: null;
  delta: number;
  description?: null;
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

export type Layouts = {
  badge_v2: { default: boolean; fields: BadgeFields };
  badge: { default: boolean; fields: BadgeFields };
  relationship: { default: boolean; fields: RelationsipFields };
  card: { default: boolean; fields: CardFields };
};

export type BadgeFields = {
  header: { id: number; type: string };
  content: { id: number; type: string };
  details_1: { id: number; type: string };
  details_2: { id: number; type: string };
  details_3: { id: number; type: string };
  footer_1: { id: string; type: string };
  footer_2: { id: string; type: string };
  footer_3: { id: string; type: string };
};
export type RelationsipFields = {
  header: { id: number; type: string };
  details_1: { id: number; type: string };
  details_2: { id: number; type: string };
  details_3?: null;
  details_4?: null;
};
export type CardFields = {
  header: { id: number; type: string };
  content: { id: number; type: string };
  details_1: { id: number; type: string };
  details_2: { id: number; type: string };
  details_3: { id: number; type: string };
};

export type Owner = {
  image: ImageType;
  last_seen_on: string;
  link: string;
  org_id?: null;
  profile_id: number;
  type: string;
  space_id?: null;
  user_id: number;
  avatar: number;
  name: string;
};
