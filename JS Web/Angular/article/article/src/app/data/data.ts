import { Article } from "../models/article.model"
import {data} from "./seed"

export class ArticleClass {
    getData(): Article[] {
        let articles: Article[] = [];

        for(let i = 0; i < data.length; i++){
            let { title, description, author, imageUrl } = data[i];
            articles.push(new Article(title, description, author, imageUrl));
        }

        return articles;
    }
}