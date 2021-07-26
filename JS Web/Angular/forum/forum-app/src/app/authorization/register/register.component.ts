import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from "../authorization.service"

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(
    public authService: AuthorizationService,
    private router: Router,
    ) { }

  login(): void {
    this.authService.setToken();
    this.router.navigate(["/"])
  }

}
