import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeComponent } from './theme.component';
import { GeneratePostsService } from './generate-posts.service';
import { AsideComponent } from './aside/aside.component';
import { SharedModule } from '../shared/shared.module';
import { ThemeRoutingModule } from './theme-routing.module';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { DetailsComponent } from './details/details.component';
import { ThemeWrapperComponent } from './theme-wrapper/theme-wrapper.component';



@NgModule({
  declarations: [
    ThemeComponent,
    NewThemeComponent,
    ThemeWrapperComponent,
    AsideComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ThemeRoutingModule
  ],
  providers: [
    GeneratePostsService
  ],
  exports: [
    ThemeComponent,
    AsideComponent
  ]
})
export class ThemeModule { }
