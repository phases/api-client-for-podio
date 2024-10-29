export type Text = {
  size: string;
  format: string;
};

export type Category = {
  options: Option[];
  multiple: boolean;
  display: string;
};
export type Option = {
  id: number;
  status: string;
  text: string;
  color: string;
};

export type Phone = {
  possible_types: string[];
  call_link_scheme: string;
};

export type Email = {
  include_in_cc: boolean;
  include_in_bcc: boolean;
  possible_types: string[];
};

export type Image = {
  allowed_mimetypes: string[];
};

export type Progress = any; //todo

export type Money = {
  allowed_currencies: string[];
};

export type Location = {
  structured: boolean;
  has_map: boolean;
};

export type Duration = {
  fields: string[];
};

export type Date = {
  calendar: boolean;
  end: string;
  time: string;
  color: string;
};

export type Contact = {
  type: string;
  valid_types: string[];
};

export type Embed = any; //todo

export type Number = {
  decimals: number;
};
