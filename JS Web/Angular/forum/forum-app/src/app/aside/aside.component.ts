import { Component } from '@angular/core';
import { GenerateRecentPostsService } from "../generate-recent-posts.service";
import { IPosts } from "../interfaces/posts"


@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent {

  posts: IPosts[] | null = null;

  constructor(public generatePosts: GenerateRecentPostsService) {
    this.generatePosts.loadData(5).subscribe(posts => {
      this.posts = posts;
    })
  }

}
