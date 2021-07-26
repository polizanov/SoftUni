import { IInfo } from "../info"
import { IPost } from "./post"

export interface IThemeDetils extends IInfo {
  subscribers: string[];
  posts: IPost[];
  _id: string;
  themeName: string;
  userId: string;
}