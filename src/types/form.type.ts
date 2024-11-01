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
