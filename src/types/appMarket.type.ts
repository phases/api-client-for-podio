import { Interface } from 'readline';
import { App } from './app.type';
import { SpaceDetails } from './contact-total.type';
import { User } from './user.type';
import { Comment } from './comment.type';
import { Counts } from './item.type';
import { Image } from './image.type';

export type InstallShareAttributes = {
  space_id?: Number;
  dependencies?: Number[];
};

export interface ShareAppAttributes {
  scope?: 'public' | 'private';
  ref_type?: 'app' | 'space';
  ref_id?: Number;
  name?: String;
  abstract?: any;
  description?: String;
  language?: String;
  category_ids?: Number[];
  file_ids?: Number[];
  video?: any;
  features?: any;
  children?: any;
}

export interface UpdateShareAttributes {
  name?: String;
  abstract?: any;
  description?: String;
  language?: String;
  category_ids?: Number[];
  file_ids?: Number[];
  video?: any;
}

export type AppMarketCategory = {
  vertical: VerticalAndFunctional[];
  functional: VerticalAndFunctional[];
};

export type VerticalAndFunctional = {
  category_id: number;
  name: string;
  type: string;
};

export type OwnShare = {
  shares: ShareOwn[];
  total: number;
};

export interface ShareOwn {
  abstract: string;
  app?: App;
  children: ChildrenAndParent[];
  icon: string | null;
  icon_id: number | null;
  installs: number | null;
  integration: null | string;
  link: string;
  name: string;
  parents: ChildrenAndParent[];
  rating?: null | number;
  scope?: string;
  share_id: number;
  type: string;
  space?: SpaceDetails;
  status: string;
  visible: boolean;
}

export type ChildrenAndParent = {
  abstract: string;
  icon: string | null;
  icon_id: number | null;
  installs: number | null;
  link: string;
  name: string;
  share_id: number;
  type: string;
  status: string;
  visible: boolean;
};

export interface GetShares extends ShareOwn {
  author: User;
  author_apps?: number;
  author_packs?: number;
  categories: AppMarketCategory;
  comments?: Comment[];
  description: string;
  features?: string[];
  language: string;
  org?: SharedOrg;
  parents: ChildrenAndParent[];
  ratings?: Rating;
  screenshots: Image[];
  shared_on: string;
  user_rating?: null | number;
  video: string | null;
}

export type SharedOrg = {
  profile: User;
  role: null;
  url_label: string;
};

export type Rating = {
  average: number;
  counts: Counts;
};

export type AppInstall = {
  child_app_ids: number[];
};
export type ShareApp = {
  share_id: number;
};
