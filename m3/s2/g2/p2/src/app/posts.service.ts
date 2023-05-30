import { Injectable } from '@angular/core';
import { Post } from './Modules/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }
  
  Url: string = 'assets/db.json';

  getPosts(): Promise<Post[]> {
    return fetch(this.Url).then(res => res.json());
  }
}
