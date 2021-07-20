import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPosts } from './shared/interfaces/posts';

@Injectable()
export class GenerateRecentPostsService {
  
  constructor(public httpClient: HttpClient) {}

  loadData(limit: number) : Observable<IPosts []> {
    return this.httpClient.get<IPosts []>(`http://localhost:3000/api/posts?limit=${limit}`)
  }
}
