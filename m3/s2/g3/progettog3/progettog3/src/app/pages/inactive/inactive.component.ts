import { Component } from '@angular/core';
import { Posts } from 'src/app/Models/posts';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-inactive',
  templateUrl: './inactive.component.html',
  styleUrls: ['./inactive.component.scss']
})
export class InactiveComponent {

  ArrayInactivePosts:Posts[] = [];

  constructor(private postsSvc: PostService){
    this.ArrayInactivePosts = this.postsSvc.getPosts(false);
    }

}
