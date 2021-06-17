import { Article } from "../model/article.model";
import { data } from "./seed"


export class ArticleData {
    getData() : Article[] {
        let articles: Article[] = [];

        data.forEach(x => articles.push(x))

        return articles;
    }
}

