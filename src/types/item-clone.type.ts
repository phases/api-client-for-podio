import { File } from './file.type';
import { Image } from './image.type';
import { ItemValues } from './item-values.type';

export type ItemClone = {
  files: File[];
  tags: string[];
  values: ItemValues;
};
