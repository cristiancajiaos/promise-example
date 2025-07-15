import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, lastValueFrom, Observable } from 'rxjs';
import { Post } from '../classes/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(
    private http: HttpClient
  ) {}

  public getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.baseUrl}/posts`);
  }

  public async postsFoo(): Promise<Post[]> {
    const foo = await lastValueFrom(this.http.get<Post[]>(`${this.baseUrl}/posts`));
    return foo;
  }
}
