export type CreateAttributes = {
  people: any;
  action: 'view' | 'comment' | 'rate';
  message: string;
  access_level: 'edit' | 'view';
};

export type UpdateAttributes = {
  access_level: 'edit' | 'view';
};
