export type Name = 'task' | 'status' | 'item_user' | 'item_app' | 'space' | 'item_comment_user' | 'item_comment_app';
export type RefType = 'space' | 'app' | 'org' | 'item';

export interface UpdateAppEmailAttributes {
  attachments: boolean;
  mappings: any;
}

export type ExportRefContactToLinkedAccountAttributes = {
  linked_account_id: Number;
};

export type Email = {
  name: String;
  mail: string;
};

export type EmailConfiguration = {
  attachments: boolean;
  field_options: FieldOptions;
  mappings: mappings;
};

export type FieldOptions = {
  [key: string]: string[];
};
export type mappings = {
  [key: string]: string;
};

export type EmailLinkedAccount = {
  linked_account_id: string | number;
};
