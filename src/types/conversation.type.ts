export type AddParticipantsAttributes = {
  participants: Number[];
};

export interface CreateConversationAttributes {
  subject?: String;
  text?: String;
  file_ids?: Number[];
  participants?: Number[];
  embed_id?: Number;
  embed_url?: String;
  session?: {
    type?: 'normal' | 'omega';
    data?: any;
  };
}

export type SearchAttributes = {
  text: String;
};
