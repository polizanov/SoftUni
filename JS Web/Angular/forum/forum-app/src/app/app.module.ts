import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AsideComponent } from './aside/aside.component';

import { GenerateRecentPostsService } from "./generate-recent-posts.service"

import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './theme/theme.module';
import { HomeComponent } from './home/home.component';
import { AuthorizationModule } from './authorization/authorization.module';


@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    ThemeModule,
    AuthorizationModule,
    AppRoutingModule
  ],
  providers: [
    GenerateRecentPostsService,
  ],
  bootstrap: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class AppModule { }
