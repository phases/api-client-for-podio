import { AccountingInfo } from '../types/app.type';
export type ContactTotal = {
  count: number;
  orgs: orgs[];
};
type orgs = {
  count: number;
  org: ContactOrg;
  spaces: ContactSpaces[];
};

type ContactOrg = {
  name: string;
  org_id: number;
  url: string;
  url_label: string;
};

type ContactSpaces = {
  count: number;
  space: SpaceDetails;
};
export type SpaceDetails = {
  item_accounting_info?: null | AccountingInfo;
  name: string;
  org_id: number;
  sharefile_vault_url?: null;
  space_id: number;
  type: string;
  url: string;
  url_label: string;
};
