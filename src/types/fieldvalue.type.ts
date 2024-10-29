export type FieldValue = {
  values: any;
};

export type ImageFieldValueType = {
  description: null;
  external_file_id: null;
  file_id: number;
  hosted_by: string;
  hosted_by_humanized_name: string;
  link: string;
  link_target: string;
  mimetype: string;
  name: string;
  perma_link: null;
  size: number;
  thumbnail_link: string;
};

export type CategoryFieldValueType = {
  id: number;
  status: string;
  text: string;
  color: string;
};

export type DateFieldValueType = {
  start: string;
  start_date: string;
  start_time: null;
  start_utc: string;
  start_date_utc: string;
  start_time_utc: null;
  end: string;
  end_date: string;
  end_time: null;
  end_utc: string;
  end_date_utc: string;
  end_time_utc: null;
};
