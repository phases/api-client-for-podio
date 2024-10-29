import { CreatedVia } from './created-via.type';

export type Hook = {
  hook_id: number;
  status: string;
  type: string;
  url: string;
  created_by: HookCreatedBy;
  created_via: CreatedVia;
  created_on: string;
};
type HookCreatedBy = {
  type: string;
  id: number;
};

export type HookCreate = {
  hook_id: number;
};
