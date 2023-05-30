import { Component } from '@angular/core';
import { Post } from 'src/app/Modules/post';
import { PostsService } from 'src/app/posts.service';

@Component({
  selector: 'app-inactive-post',
  templateUrl: './inactive-post.component.html',
  styleUrls: ['./inactive-post.component.scss']
})
export class InactivePostComponent {

  postArray: Post[] = [];

  constructor(private postSvc: PostsService){
    this.postSvc.getPosts().then(post => {
      let postFiltrati = post.filter(p => !p.active);

      this.postArray = postFiltrati
    })
  }

}
