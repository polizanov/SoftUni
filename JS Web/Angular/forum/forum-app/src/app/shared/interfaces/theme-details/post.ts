import { IUser } from "../user";
import { IInfo } from "../info"

export interface IPost extends IInfo {
    likes: string[];
    _id: string;
    text: string;
    userId: IUser;
    themeId: string;
}