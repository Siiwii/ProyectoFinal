import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from '../../../services/posts/posts.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../../models/post';
import { Comment } from '../../../models/comment'; 
import { Subscription } from 'rxjs/Subscription';
import { CapitalizePipe } from '../../../pipes/capitalize.pipe';
import { FormControl } from '@angular/forms';
import { User } from '../../../models/users';

@Component({
  selector: 'app-postdetail',
  templateUrl: './postdetail.component.html',
  styleUrls: ['./postdetail.component.scss']
})
export class PostdetailComponent implements OnInit {
  @Input('post') post:Post;
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
