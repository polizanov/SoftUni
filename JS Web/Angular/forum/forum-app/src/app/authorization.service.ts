import { Injectable } from '@angular/core';

@Injectable()
export class AuthorizationService {

  constructor() { }

  public setToken(): void {
    localStorage.setItem("AUTH-TOKEN", "just-logged")
  }

  removeToken(): void {
    localStorage.clear()
  }
}
