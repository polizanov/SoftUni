import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeComponent } from './theme.component';
import { GeneratePostsService } from './generate-posts.service';



@NgModule({
  declarations: [
    ThemeComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    GeneratePostsService
  ],
  exports: [
    ThemeComponent
  ]
})
export class ThemeModule { }
