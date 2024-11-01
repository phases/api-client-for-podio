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
