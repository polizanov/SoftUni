import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ThemeComponent } from './theme/theme.component';
import { AsideComponent } from './aside/aside.component';

import { AuthorizationService } from "./authorization.service";
import { GeneratePostsService } from "./generate-posts.service";
import { GenerateRecentPostsService } from "./generate-recent-posts.service"


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ThemeComponent,
    AsideComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    AuthorizationService,
    GeneratePostsService,
    GenerateRecentPostsService,
  ],
  bootstrap: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class AppModule { }
