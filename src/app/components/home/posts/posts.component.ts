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
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

postt:Post;

private sub: Subscription;
isSubmitting = false;
isDeleting = false;
currentUser: User;
canModify: boolean;
comments: Comment[];
commentControl = new FormControl();
commentFormErrors = {};

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
    post => { this.postt = post;
  });
}
}
  // addComment() {
  //   this.isSubmitting = true;
  //   this.commentFormErrors = {};

  //   const commentBody = this.commentControl.value;
  //   this.commentsService
  //     .add(this.post.slug, commentBody)
  //     .subscribe(
  //       comment => {
  //         this.comments.unshift(comment);
  //         this.commentControl.reset('');
  //         this.isSubmitting = false;
  //       },
  //       errors => {
  //         this.isSubmitting = false;
  //         this.commentFormErrors = errors;
  //       }
  //     );
  // }

  // onDeleteComment(comment) {
  //   this.commentsService.destroy(comment.id, this.post.slug)
  //     .subscribe(
  //       success => {
  //         this.comments = this.comments.filter((item) => item !== comment);
  //       }
  //     );
  // }

