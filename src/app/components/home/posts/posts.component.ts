import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../../services/posts.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../../model/post';
import { Subscription } from 'rxjs/Subscription';
import { CapitalizePipe } from '../../../pipes/capitalize.pipe';

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
      this.getPost(parseInt(id));
    });
}

private getPost(id:number) {
  this.postsService.getPost(id).subscribe(
    post => { this.post = post;
  });

  }

}
