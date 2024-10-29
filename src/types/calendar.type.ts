import { App } from './app.type';

export interface FilterAppCalendarAttributes extends LinkedAccountCalendarAttributes {
  priority?: any;
  tasks?: Boolean;
  view_id?: String | Number;
  filters?: any;
}

export interface AppCalendarAttributes extends LinkedAccountCalendarAttributes {
  priority?: any;
  tasks?: Boolean;
}

export type SummaryAttributes = {
  limit?: Number;
  priority?: Number;
};

export interface GlobalCalendarAttributes extends LinkedAccountCalendarAttributes {
  priority?: Number;
  tasks?: Boolean;
}

export type LinkedAccountCalendarAttributes = {
  date_from?: String;
  date_to?: String;
};

export interface SpaceCalendarAttributes extends LinkedAccountCalendarAttributes {
  priority?: Number;
  tasks?: Boolean;
}

export interface MoveExternalCalendarEventAttributes extends UpdateExternalCalendarEventDurationAttributes {
  all_day?: Boolean;
}

export type UpdateAttributes = {
  start_date?: String;
  start_time?: String;
  end_date?: String;
  end_time?: String;
};

export type UpdateExternalCalendarEventDurationAttributes = {
  day_delta?: Number;
  minute_delta?: Number;
};

export type Calendar = {
  app: App;
  busy: boolean;
  category_text: null;
  color: string;
  description: null | string;
  forged: boolean;
  link: string;
  location: null | string;
  ref_id: number;
  ref_type: string;
  source: string;
  status: null;
  title: string;
  uid: string;
  version: number;
  start: string;
  start_utc: string;
  start_date: string;
  start_time: null | string;
  end: string | null;
  end_utc: string;
  end_date: string | null;
  end_time: null | string;
};

export type Summary = {
  today: DaySummary;
  upcoming: DaySummary;
};
export type DaySummary = {
  events: Calendar[];
  total: number;
};
