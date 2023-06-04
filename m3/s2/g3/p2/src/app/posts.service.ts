import { EventEmitter, Injectable, Input, Output } from '@angular/core';
import { Post } from './Modules/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }
  
  Url: string = 'assets/db.json';

  getPosts(activeInactive:boolean): Post[] {
    if(activeInactive) 
    return this.postArray.filter((p:Post) => p.active)}
    {else  }

}
