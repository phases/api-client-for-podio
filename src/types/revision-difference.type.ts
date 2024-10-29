export type RevisionDifference = {
  field_id: number;
  external_id: string;
  type: string;
  label: string;
  config: Config;
  from: From[];
  to: To[];
};

type Config = {
  default_value?: null;
  delta: number;
  description?: null | string;
  hidden: boolean;
  hidden_create_view_edit: boolean;
  label: string;
  mapping?: null;
  required: boolean;
  settings: Settings[];
  unique: boolean;
  visible: boolean;
};

type Settings = any; //todo
type From = any; //todo
type To = any; //todo
