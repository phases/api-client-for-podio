export type UpdateAttribute = {
  name: String;
  config?: any;
  effects?: any;
};

export interface CreateAttribute extends UpdateAttribute {
  type: 'item.create' | 'item.update';
}

export type GetEffectAttributes = {
  type?: 'item.create' | 'item.update';
  config?: any;
};

export interface GetPossibleAttributes {
  cause?: {
    type?: String;
    config?: any;
  };
  effect?: {
    type?: String;
    config?: any;
    attribute_id?: Number;
  };
}
