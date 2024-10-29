export type Context = {
  'item.item_id': ContextValue;
  'item.app_item_id': ContextValue;
  'item.created_by': ContextValue;
  'item.files': ContextValue;
  'item.field.title': ContextValue;
  'item.field.username': ContextValue;
  'item.field.password': ContextValue;
  'item.field.field-3': ContextValue;
  'item.field.field-2': ContextValue;
  'item.field.text': ContextValue;
  'item.field.text-2': ContextValue;
  tag: ContextValue;
  'global.auth': ContextValue;
  'global.time.next_friday': ContextValue;
  'global.time.next_monday': ContextValue;
  'global.time.now': ContextValue;
  'global.time.today': ContextValue;
  'global.time.tomorrow': ContextValue;
  null: ContextValue;
};

export type ContextValue = {
  attribute_id: string;
  field_id?: number;
  label: string;
  nullable?: boolean;
  required?: boolean;
  type: string;
};
