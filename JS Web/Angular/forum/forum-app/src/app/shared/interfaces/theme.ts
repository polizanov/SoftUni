import {IInfo} from "./info"
import {IUser} from "./user"

export interface ITheme extends IInfo {
    subscribers: string[];
    posts: string[];
    _id: string;
    themeName: string;
    userId: IUser;
  }