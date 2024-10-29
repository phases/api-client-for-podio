import { Image } from './image.type';

export type Contact = {
    external_id?: null;
    image?: Image |null;
    last_seen_on: string;
    link: string;
    org_id?: null | number;
    profile_id: number;
    type: string;
    rights?: string[];
    space_id?: null | number;
    user_id: number;
    avatar?: number;
    country?: string;
    state?: string;
    mail?: string[];
    name: string;
    phone?: string[];
    address?: string[];
    city?: string;
    location?: string[];
    skill?:string[];
    title?:string[];
    zip?:string
    linkedin?:string
    about?:string
    app_store_about?:string
    app_store_location?:string
    app_store_organization?:string
    app_store_title?:string
    app_store_url?:string
    skype?:string
    twitter?:string
    url?:string[]
    im?:string[]
    birthDate?:string
    department?:string
};

export type CreateContact={
    profile_id:number 
}


