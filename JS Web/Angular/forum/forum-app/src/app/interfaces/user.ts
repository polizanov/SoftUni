import {IInfo} from "./info"

export interface IUser extends IInfo {
    themes: string[];
    posts: string[];
    _id: string;
    tel: string;
    email: string;
    username: string,
    password: string,
  }