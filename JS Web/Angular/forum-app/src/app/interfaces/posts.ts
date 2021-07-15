import { IUser } from "./user";
import { ITheme } from "./theme"

export interface IPosts {
    likes: string[];
    _id: string;
    text: string;
    userId: IUser;
    themeId: ITheme;
}