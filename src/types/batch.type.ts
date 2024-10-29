import { App } from '../types/app.type';
import { SpaceDetails } from '../types/contact-total.type';
import { User } from './user.type';
export type BatchType = {
  app: App;
  batch_id: number;
  completed: number;
  created_on: string;
  ended_on: string;
  failed: number;
  file?: null;
  name: string;
  plugin: string;
  ref: BatchRef;
  skipped: number;
  space: SpaceDetails;
  started_on: string;
  status: string;
};
type BatchRef = {
  created_by: User;
  created_on: string;
  created_via?: null;
  data: SpaceData;
  id: number;
  link: string;
  title: string;
  type: string;
  type_name: string;
};

interface SpaceData extends App {
  space: SpaceDetails;
}
