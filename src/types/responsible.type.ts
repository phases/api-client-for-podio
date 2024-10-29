import { Image } from './image.type';

export type Responsible = {
  image: Image;
  last_seen_on: string;
  link: string;
  org_id?: null;
  profile_id: number;
  type: string;
  space_id?: null;
  user_id: number;
  avatar: number;
  name: string;
};
