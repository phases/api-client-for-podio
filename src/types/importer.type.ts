type MappingField = {
  field_key: number | string;
  unique: boolean;
  column_id: number;
};

type DateMap = {
  start_column_id: number;
  stop_column_id: number;
  day_first: boolean;
};

type MenoeyMap = {
  value_column_id: number;
  currency_column_id: number;
  currency_default: string;
};

type AppMap = {
  app_id: number;
  mappings: any;
};

type ContactMap = {
  mappings: MappingField[];
};

interface EmailMap {
  [key: number]: 'home' | 'work' | 'other';
}

interface PhoneMap {
  [key: number]: 'home' | 'work' | 'other' | 'mobile' | 'main' | 'work_fax' | 'private_fax';
}

interface LocationMap {
  [key: number]:
    | 'value'
    | 'lat'
    | 'lng'
    | 'street_number'
    | 'street_name'
    | 'postal_code'
    | 'city'
    | 'state'
    | 'country'
    | 'street_address';
}

type OtherMap = {
  column_id: number;
};

export interface ImportAttributes {
  app_id: number;
  mapping?: DateMap[] | MenoeyMap[] | AppMap[] | ContactMap[] | EmailMap[] | PhoneMap[] | LocationMap[] | OtherMap[];
  tags_column_id?: number;
  app_item_id_column_id?: number;
}
