import { Component } from '@angular/core';
import { Post } from 'src/app/Modules/post';
import { PostsService } from 'src/app/posts.service';

@Component({
  selector: 'app-active-post',
  templateUrl: './active-post.component.html',
  styleUrls: ['./active-post.component.scss']
})

export class ActivePostComponent {

  postArray: Post[] = [];

  constructor(private postSvc: PostsService){
    this.postSvc.getPosts().then(post => {
      let postFiltrati = post.filter(p => p.active);

      this.postArray = postFiltrati
    })
  }

}
