import { Injectable } from '@angular/core';

@Injectable()
export class AuthorizationService {

  constructor() { }

  public setToken(): void {
    localStorage.setItem("AUTH-TOKEN", "just-logged")
  }

  get token() : any {
    return localStorage.getItem("AUTH-TOKEN");
  }

  removeToken(): void {
    localStorage.clear()
  }
}
