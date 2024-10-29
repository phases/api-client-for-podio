import { Contact } from './contact.type';
import { Image } from './image.type';

export type User = {
  avatar: number | null;
  avatar_id?: number;
  avatar_type?: string;
  link?: string;
  org_id?: number | null;
  profile_id?: number | null;
  image: Image|null;
  space_id: null | number;
  last_seen_on: string;
  name: string;
  id?: number;
  type: string;
  url?: string;
  user_id: number | null;
};

export type SingleUser = {
  activated_on: string;
  created_on: string;
  flags: [];
  from_sharefile: boolean;
  locale: string;
  mail: string;
  mails: mails[];
  sf_mail: null;
  status: string;
  timezone: string;
  user_id: number;
};
export type mails = {
  disabled: boolean;
  verified: boolean;
  mail: string;
  primary: boolean;
};

export type UserProfile = {
  betas?: [];
  calendar_code?: string;
  flags?: [];
  inbox?: null;
  inbox_new?: number;
  mailbox: string;
  message_unread_count: number;
  presence: Presence;
  profile: Contact;
  properties: {};
  push: Push;
  referral: Referral;
  user: SingleUser;
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

export type Referral = {
  status: string;
  code: string;
};

export type property = {
  value: String;
};
