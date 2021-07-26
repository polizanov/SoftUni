import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IPosts } from './interfaces/posts';
import {IThemeDetils} from "./interfaces/theme-details/themeDetails"

@Injectable()
export class GenerateRecentPostsService {
  
  constructor(
    public httpClient: HttpClient) {}

  loadData(limit: number) : Observable<IPosts []> {
    return this.httpClient.get<IPosts []>(`http://localhost:3000/api/posts?limit=${limit}`)
  }

  loadPostDetails(id: string) {
    return this.httpClient.get<IThemeDetils>(`http://localhost:3000/api/themes/${id}`);
  }
}
