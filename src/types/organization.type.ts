import { Image } from '../types/image.type';
import { AccountingInfo } from './app.type';

export type OrganizationType = {
  contract_status: string;
  created_by: CreatedBy;
  created_on: string;
  domains: string[];
  from_sharefile: boolean;
  grants_count: number;
  image: Image;
  logo: number;
  name: string;
  org_id: number;
  premium: boolean;
  rights: string[];
  role: string;
  sales_agent_id: number;
  segment?: null;
  segment_size: number;
  sharefile: null;
  sharefile_vault_enabled: boolean;
  status: 'active' | 'inactive';
  tier: null | string;
  type: 'free' | 'sponsored' | 'premium';
  url: string;
  url_label?: string;
  user_limit?: number;
  rank?: number;
  spaces?: any; //todo
};

export type CreatedBy = {
  image: Image;
  last_seen_on: string;
  link: string;
  org_id?: null;
  profile_id: number;
  type: string;
  space_id: null;
  user_id: number;
  avatar: number;
  name: string;
};

export type Admin = {
  image: Image;
  last_seen_on: string;
  link: string;
  org_id?: null | number;
  profile_id: number;
  type: string;
  space_id?: null | number;
  user_id: number;
  avatar: number;
  name: string;
};

export type Shared = {
  contract_status: string;
  domains: string[];
  image: Image;
  logo: number;
  name: string;
  org_id: number;
  premium: boolean;
  segment: null;
  segment_size: null;
  status: 'active' | 'inactive';
  tier: string;
  type: 'free' | 'sponsored' | 'premium';
  url: string;
  url_label: string;
  spaces: Space[];
};

export type Space = {
  item_accounting_info?: AccountingInfo;
  name: string;
  org_id: number;
  sharefile_vault_url?: null;
  space_id: number;
  type: string;
  url: string;
  url_label: string;
};

export type ProfileType = {
  profile_id: number;
};

export type CreateType = {
  org_id: number;
  url: string;
  url_label: string;
};
