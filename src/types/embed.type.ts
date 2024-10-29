export interface CreateAttributes {
  url: string;
  mode?: 'immediate' | 'delayed';
}

export type Embed = {
  description?: null | string;
  embed_height: null | number;
  embed_html: null;
  embed_id: number;
  embed_width: null | number;
  files: EmbedFile[];
  hostname: string;
  original_url: string;
  resolved_url: string;
  title: string;
  type: string;
  url: string;
};
export type EmbedFile = {
  description: null | string;
  external_file_id: null | number;
  file_id: number;
  hosted_by: string;
  hosted_by_humanized_name: string;
  link: string;
  link_target: string;
  mimetype: string;
  name: string;
  perma_link: null | string;
  size: number;
  thumbnail_link: string;
};
