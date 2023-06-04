import { Component } from '@angular/core';
import { Posts } from 'src/app/Models/posts';
import { PostService} from 'src/app/post.service';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.scss']
})
export class ActiveComponent {

  ArrayActivePosts:Posts[] = [];

  constructor(private postsSvc: PostService){
      this.ArrayActivePosts = this.postsSvc.getPosts(true);
      }

    }
