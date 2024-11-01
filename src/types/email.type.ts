export type Name = 'task' | 'status' | 'item_user' | 'item_app' | 'space' | 'item_comment_user' | 'item_comment_app';
export type RefType = 'space' | 'app' | 'org' | 'item';

export interface UpdateAppEmailAttributes {
  attachments: boolean;
  mappings: any;
}

export type ExportRefContactToLinkedAccountAttributes = {
  linked_account_id: Number;
};
