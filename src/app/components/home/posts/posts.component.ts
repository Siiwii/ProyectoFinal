import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../../services/posts.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../../model/post';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

post: Post;
private sub: Subscription;

constructor( private route: ActivatedRoute, private postsService: PostsService ) { }

ngOnInit() : void{
  this.sub = this.route.params.subscribe(
    params => {
      let id = params['id'];
      this.getPost(id);
    });
}

getPost(id:number) {
  this.postsService.getPost(id).subscribe(
    post => this.post = post,
  );
}

}

