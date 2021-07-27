import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { GenerateRecentPostsService } from "./shared/generate-recent-posts.service"


import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './theme/theme.module';
import { HomeComponent } from './home/home.component';
import { AuthorizationModule } from './authorization/authorization.module';
import { APP_BASE_HREF } from '@angular/common';
import { ThemeRoutingModule } from './theme/theme-routing.module';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    ThemeModule,
    AuthorizationModule,
    AppRoutingModule,
    ThemeRoutingModule
  ],
  providers: [
    GenerateRecentPostsService,
    { provide: APP_BASE_HREF, useValue: '' }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
