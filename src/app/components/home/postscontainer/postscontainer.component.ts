import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../../services/posts/posts.service';
import { CapitalizePipe } from '../../../pipes/capitalize.pipe';
import { Post } from '../../../models/post';
import { Subscription } from 'rxjs/Subscription';
import { NgModel, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-postscontainer',
  templateUrl: './postscontainer.component.html',
  styleUrls: ['./postscontainer.component.scss'],
})
export class PostscontainerComponent implements OnInit {
  bar = new FormControl(null, Validators.required);
  posts: Post[];
  errorMessage: string;
  public isCollapsed = false;
  postss: any[];

  constructor(private postsService: PostsService) { }

  ngOnInit() { this.getAll() }

  getAll() {
    this.postsService.getAll()
      .subscribe(
      posts => this.posts = posts,
      error => this.errorMessage = <any>error
      );
  }

}

  // Este componente listea todo el json
