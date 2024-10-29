import { Comment } from './comment.type';
import { CreatedBy } from './created-by.type';
import { CreatedVia } from './created-via.type';
import { File } from './file.type';
import { Reference } from './reference.type';
import { Responsible } from './responsible.type';
import { Push } from './space.type';
import { User } from './user.type';

export * from './responsible.type';
export interface GetAllAttributes {
  app?: number;
  completed?: boolean;
  completed_by?: string;
  completed_on?: string;
  created_by?: string;
  created_on?: string;
  created_via?: string;
  due_date?: string;
  external_id?: string;
  files?: boolean;
  grouping?: 'due_date' | 'created_by' | 'responsible' | 'app' | 'space' | 'org';
  label?: number;
  limit?: number;
  offset?: number;
  org?: string;
  reassigned?: boolean;
  reference?: string;
  responsible?: string;
  sort_by?: 'created_on' | 'completed_on' | 'rank';
  sort_desc?: boolean;
  space?: string;
  view?: string;
}

export type Task = {
  comments: Comment[];
  completed_by?: null | User;
  completed_on?: null | string;
  completed_via?: CompletedVia;
  created_by: CreatedBy;
  created_on: string;
  created_via: CreatedVia;
  description: string;
  due_date: string;
  due_on: string;
  due_time?: null;
  external_id?: null;
  files: File[];
  is_liked: boolean;
  labels: Label[];
  like_count: number;
  link: string;
  presence: Presence;
  private: boolean;
  push: Push;
  recurrence?: null;
  ref: Reference;
  reminder?: null;
  responsible: Responsible;
  rights: string[];
  space_id: number;
  started: boolean;
  status: string;
  subscribed: boolean;
  subscribed_count: number;
  task_id: number;
  text: string;
};

export type CompletedVia = {
  auth_client_id: number;
  display: boolean;
  id: number;
  name: string;
  url?: null;
};

export type Label = {
  color: string;
  label_id: number;
  text: string;
};

export type Presence = {
  user_id: number;
  signature: string;
  ref_type: string;
  ref_id: number;
};

export type MiniTask = {
  description: string;
  due_date: string;
  due_on: string;
  due_time?: null;
  external_id?: null;
  group: string;
  labels: Label;
  link: string;
  private: boolean;
  recurrence?: null;
  ref: Reference;
  reminder?: null;
  responsible: Responsible;
  space_id: number;
  status: string;
  task_id: number;
  text: string;
};

export type TaskCount = {
  count: number;
};

export type TaskSummary = {
  overdue: Summary;
  today: Summary;
  other: Summary;
};

type Summary = {
  tasks: Task[];
  total: number;
};

export type Total = {
  own: Own;
  reassigned: Reassigned;
};

export type Own = {
  completed_yesterday: number;
  overdue: number;
  today: number;
  tomorrow: number;
  upcoming: number;
  later: number;
};

export type Reassigned = {
  completed_yesterday: number;
  overdue: number;
  today: number;
  tomorrow: number;
  upcoming: number;
  later: number;
};

export type RecurringTaskId = { recurring_task_id?: null };

export type CreateLabel = { label_id: number };
