import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IThemeDetils } from "../../shared/interfaces/theme-details/themeDetails"
import { GenerateRecentPostsService } from '../../shared/generate-recent-posts.service';
import { AuthorizationService } from 'src/app/authorization/authorization.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  theme: IThemeDetils | undefined;
  

  constructor(
    private activateRoute: ActivatedRoute,
    private generatePost: GenerateRecentPostsService,
    private authServise: AuthorizationService
  ) { 
    this.generateTheme()
  }

    generateTheme(): void {
      let id = this.activateRoute.snapshot.params.themeId;
      this.generatePost.loadPostDetails(id).subscribe(theme => this.theme = theme);
    }


    get isLogged() : boolean {
      return !!this.authServise.token
    }
}
