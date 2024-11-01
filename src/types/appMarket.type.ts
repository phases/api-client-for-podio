export type InstallShareAttributes = {
  space_id?: Number;
  dependencies?: Number[];
};

export interface ShareAppAttributes {
  scope?: 'public' | 'private';
  ref_type?: 'app' | 'space';
  ref_id?: Number;
  name?: String;
  abstract?: any;
  description?: String;
  language?: String;
  category_ids?: Number[];
  file_ids?: Number[];
  video?: any;
  features?: any;
  children?: any;
}

export interface UpdateShareAttributes {
  name?: String;
  abstract?: any;
  description?: String;
  language?: String;
  category_ids?: Number[];
  file_ids?: Number[];
  video?: any;
}
