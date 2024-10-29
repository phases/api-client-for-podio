import {
  TextValue,
  CategoryValue,
  PhoneValue,
  EmailValue,
  ImageValue,
  ProgressValue,
  MoneyValue,
  LocationValue,
  DurationValue,
  DateValue,
  ContactValue,
  EmbedValue,
  NumberValue,
  ContactValues,
} from './values.type';

export type ItemValues = {
  title: string;
  type: TypeValue;
  duration: number;
  dob: DateValue;
  member: ContactValues[];
  phone: PhoneValue[];
  email: EmailValue[];
  link: EmbedValue[];
  image: ImageValue[];
  number: number;
  progress: number;
  money: MoneyValue;
  location: LocationValue[];
};

export type TypeValue = {
  id: number;
  status: string;
  text: string;
  color: string;
};
