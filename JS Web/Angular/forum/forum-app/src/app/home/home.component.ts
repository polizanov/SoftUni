import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../authorization/authorization.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  constructor(
    private authService: AuthorizationService
  ) { }

  get isLogged(): boolean {
    return !!this.authService.token;
  }

}
