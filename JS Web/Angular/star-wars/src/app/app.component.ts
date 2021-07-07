import { Component } from '@angular/core';
import {GetAvatarsService} from "./get-avatars.service"
import {IAvatar} from "./interface/iAvatar";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  avatars: IAvatar[] | null = null;

  constructor(GetAvatarsService: GetAvatarsService) {
    GetAvatarsService.loadData().subscribe(a => {
      this.avatars = a;
    })
  }
}
