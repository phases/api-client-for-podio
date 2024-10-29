import { Ref } from '../types/comment.type';

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

export type Flow = {
  config: flowConfig;
  effects: effects[];
  execution_count: number;
  flow_id: number;
  name: string;
  ref: Ref;
  type: string;
};
type flowConfig = {
  field_ids: any[];
};
type effects = {
  attributes: Attributes[];
  config?: null;
  effect_id: number;
  type: string;
};

export type Attributes = {
  attribute_id: string;
  field_id?: null | number;
  label: string;
  nullable: boolean;
  required: boolean;
  type: string;
  value?: string | null;
  substitutions?: {} | null;
};



export type PossibleAttributes = {
  attribute_id: string;
  label: string;
  type: string;
};