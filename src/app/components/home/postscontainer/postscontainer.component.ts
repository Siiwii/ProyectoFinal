import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../../services/posts.service';
import { CapitalizePipe } from '../../../pipes/capitalize.pipe';
import { Post } from '../../../model/post';
import { Subscription } from 'rxjs/Subscription';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-postscontainer',
  templateUrl: './postscontainer.component.html',
  styleUrls: ['./postscontainer.component.scss'],
})
export class PostscontainerComponent implements OnInit {
 
posts : Post[];
errorMessage: string;

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
