import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITheme } from '../shared/interfaces/theme';


@Injectable()
export class GeneratePostsService {

  constructor(public httpClient: HttpClient) { }

  loadThemes() : Observable<ITheme[]> {
    return this.httpClient.get<ITheme[]>("http://localhost:3000/api/themes")
  }
}
