import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  private symbols: number = 250;
  @Input() article: Article;
  @Input() articleDesc: String;
  descToShow: string;
  articleDescLength: number;
  showReadMoreBtn: boolean = true;
  showHideBtn: boolean = false;
  imageIsShown: boolean = false;
  imageButtonTitle: string = "Show image";

  constructor() {
    this.descToShow = "";
    this.articleDescLength = 0;
    this.article = new Article("", "", "", "");
    this.articleDesc = ""

  }


  readMore(): void {
    this.articleDescLength += this.symbols;
    if(this.articleDescLength > this.articleDesc.length){
      this.showHideBtn = true;
      this.showReadMoreBtn = false;
    } else {
      this.descToShow = this.articleDesc.substring(0, this.articleDescLength);
    }
  }

  toggleImage(): void {
    if(this.imageButtonTitle == "Show image"){
      this.imageIsShown = true;
      this.imageButtonTitle = "Hide image";
    } else {
      this.imageIsShown = false;
      this.imageButtonTitle = "Show image";
    }
  }
  
  hideDesc(): void {
    this.descToShow = "";
    this.articleDescLength = 0;
    this.showReadMoreBtn = true;
    this.showHideBtn = false;
  }
}
