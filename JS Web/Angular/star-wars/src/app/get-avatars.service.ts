import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {IAvatar} from "./interface/iAvatar";


@Injectable({
  providedIn: 'root'
})
export class GetAvatarsService {

  constructor(public http: HttpClient) { }

  loadData() : Observable<IAvatar[]> {
    return this.http.get<IAvatar[]>("https://jsonplaceholder.typicode.com/todos");
  }
}
