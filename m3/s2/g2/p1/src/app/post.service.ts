import { Injectable } from '@angular/core';
import { Post } from './Models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  Url:string = 'assets/db.json'; //chiamata ajax

  constructor() {
  }

  getAllPosts():Promise<Post[]> { 
    return fetch(this.Url).then(res => res.json())
  }
}
