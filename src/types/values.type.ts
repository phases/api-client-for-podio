import { Image } from './image.type';

export type TextValue = {
  value: string;
};

export type CategoryValue = {
  value: Value;
};

export type Value = {
  id: number;
  status: string;
  text: string;
  color: string;
};

export type PhoneValue = {
  value: number;
  type: string;
};

export type EmailValue = {
  value: string;
  type: string;
};

export type ImageValue = {
  value: ImageValues;
};

export type ImageValues = {
  description?: null;
  external_file_id?: null;
  file_id: number;
  hosted_by: string;
  hosted_by_humanized_name: string;
  link: string;
  link_target: string;
  mimetype: string;
  name: string;
  perma_link?: null;
  size: number;
  thumbnail_link: string;
};

export type ProgressValue = {
  value: number;
};

export type MoneyValue = {
  value: number;
  currency: string;
};

export type LocationValue = {
  value: string;
  lat: number;
  lng: number;
  postal_code: string;
  city: string;
  state: string;
  country: string;
  formatted: string;
  map_in_sync: boolean;
};

export type DurationValue = {
  value: number;
};

export type DateValue = {
  start: string;
  start_date: string;
  start_time?: null;
  start_utc: string;
  start_date_utc: string;
  start_time_utc?: null;
  end: string;
  end_date: string;
  end_time?: null;
  end_utc: string;
  end_date_utc: string;
  end_time_utc?: null;
};

export type ContactValue = {
  value: ContactValues;
};
export type ContactValues = {
  external_id: null;
  image: Image;
  last_seen_on: string;
  link: string;
  org_id: null;
  profile_id: number;
  type: string;
  rights: string[];
  space_id: null;
  user_id: number;
  address: string[];
  avatar: number;
  city: string;
  country: string;
  location: string[];
  mail: string[];
  name: string;
  phone: string[];
  state: string;
  title: string[];
  zip: number;
};

export type EmbedValue = {
  embed: EmbedData;
  file?: null;
};
type EmbedData = {
  description: string;
  embed_height?: null;
  embed_html?: null;
  embed_id: number;
  embed_width?: null;
  hostname: string;
  original_url: string;
  resolved_url: string;
  title: string;
  type: string;
  url: string;
};

export type NumberValue = {
  value: number;
};
