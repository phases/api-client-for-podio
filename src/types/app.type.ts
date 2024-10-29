export interface App {
  app_id: number;
  config: Config;
  current_revision: number;
  default_view_id: null;
  icon?: string;
  icon_id?: number;
  is_default: boolean;
  item_accounting_info: AccountingInfo | null;
  item_name?: string;
  link: string;
  link_add: string;
  name?: string;
  sharefile_vault_url: null;
  space_id: number;
  status: string;
  url_add: string;
  url: string;
  url_label: string;
}

export type Config = {
  icon: string;
  icon_id: number;
  item_name: string;
  name: string;
  type: string;
  //newly added for app
  allow_create?: boolean;
  allow_edit?: boolean;
  description?: null | string;
  external_id?: number;
  usage?: null;
};
// re use itemAccountinfo
export type AccountingInfo = {
  org_id: number;
  limit: number;
  count: number;
  percent: number;
};

export type CreateApplication = {
  app_id: number;
};

export type AppField = {
  field_id: number;
};
