type FieldType = {
  field_id: Number;
  settings?: any;
};

export interface CreateAttributes {
  settings?: {
    captcha: boolean;
    text: {
      heading: String;
      description: String;
      submit: String;
      success: String;
    };
    theme: any;
    css: String;
  };
  domains?: String[];
  fields?: FieldType[];
  attachments?: boolean;
}

export type Form = {
  app_id: number;
  attachments: boolean;
  domains: [];
  field_ids: number[];
  fields: FormFields[];
  form_id: number;
  settings: Formsetiings;
  space_id: number;
  status: string;
};

type FormFields = {
  field_id: number;
  settings: null;
};
type Formsetiings = {
  css: string;
  success_page: null;
  theme: string;
  captcha: boolean;
  text: FormText;
};
type FormText = {
  heading: string;
  description: string;
  success: string;
  submit: string;
};
