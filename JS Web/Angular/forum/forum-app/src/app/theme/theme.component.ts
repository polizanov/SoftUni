import { Component, OnInit } from '@angular/core';
import { GeneratePostsService } from "../generate-posts.service"
import {ITheme} from "../interfaces/theme"

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent {
  themes: ITheme[] | null = null;

  constructor(generateThemes: GeneratePostsService) { 
    generateThemes.loadThemes().subscribe(themes => {
      this.themes = themes;
    })
  }

}
