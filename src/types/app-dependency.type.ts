import { App as AppType } from '../types/app.type';

export type AppDependency = {
  apps: AppType[];
  dependencies: any; //todo
};
