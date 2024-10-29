import { Item as ItemType } from './item.type';
export type ItemFilter = {
  filtered: number;
  items: ItemType[];
  total: number;
};
