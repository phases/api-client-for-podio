export interface CreateAttributes {
  type?: string;
  silent?: boolean;
  config?: any;
}
export interface UpdateAttributes {
  silent?: boolean;
  config?: any;
}
export interface UpdateMappingAttributes {
  [key: number]: string;
}
