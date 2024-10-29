import { OrganizationType } from '../types/organization.type';
import { AccountingInfo } from './app.type';
import { Image } from './image.type';
export interface CreateSpaceAttributes {
  org_id?: number;
  privacy?: 'open' | 'closed';
  auto_join?: boolean;
  name?: string;
  post_on_new_app?: boolean;
  post_on_new_member?: boolean;
}

export interface SpaceByUrlAttributes {
  org_slug?: string;
  space_slug?: string;
  url?: string;
}

export type Space = {
  auto_join: boolean;
  created_by: SpaceCreatedBy;
  created_on: string;
  description?: null | string;
  is_overdue: boolean;
  item_accounting_info: AccountingInfo;
  name: string;
  org: OrganizationType;
  org_id: number;
  owner: SpaceOwner;
  post_on_new_app: boolean;
  post_on_new_member: boolean;
  premium: boolean;
  privacy: string;
  push: Push;
  rights: string[];
  role: string;
  sharefile_vault_url?: null;
  space_id: number;
  subscribed: boolean;
  tier?: null;
  type: string;
  url: string;
  url_label: string;
  video?: null | string;
};

export type Push = {
  channel: string;
  timestamp: number;
  signature: string;
  expires_in: number;
};

export type SpaceOwner = {
  type: string;
  id: number;
};

export type SpaceCreatedBy = {
  image: Image;
  last_seen_on: string;
  link: string;
  org_id?: null | number;
  profile_id: number;
  type: string;
  space_id?: null;
  user_id: number;
  avatar: number;
  name: string;
};

export type AvailableSeat = {
  employee: number;
  external: number;
};

export type AvailableSpace = {
  item_accounting_info: null;
  name: string;
  org_id: number;
  sharefile_vault_url: null | string;
  space_id: number;
  type: string;
  url: string;
  url_label: string;
};

export type TopSpace = {
  item_accounting_info?: AccountingInfo;
  name: string;
  org: Org;
  org_id: null;
  sharefile_vault_url: null;
  space_id: number;
  type: string;
  url: string;
  url_label: string;
};

export type Org = {
  contract_status: string;
  domains: string[];
  image: Image;
  logo: number;
  name: string;
  org_id: number;
  premium: boolean;
  segment: null | number;
  segment_size: null;
  status: 'active' | 'inactive';
  tier: string;
  type: string;
  url: string;
  url_label: string;
};

export type CreateSpace = {
  space_id: number;
  url: string;
  full_url: string;
};

export type UpdateSpace = {
  name: string;
  privacy: 'open' | 'closed';
  auto_join: boolean;
  url_label: string;
  post_on_new_app: boolean;
  post_on_new_member: boolean;
};
