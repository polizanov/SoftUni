import { Component, OnInit } from '@angular/core';
import { GeneratePostsService } from "../generate-posts.service"
import {ITheme} from "../../shared/interfaces/theme"

@Component({
  selector: 'app-theme-wrapper',
  templateUrl: './theme-wrapper.component.html',
  styleUrls: ['./theme-wrapper.component.css']
})
export class ThemeWrapperComponent {

  themes: ITheme[] | null = null;

  constructor(generateThemes: GeneratePostsService) { 
    generateThemes.loadThemes().subscribe(themes => {
      this.themes = themes;
    })
  }


}
