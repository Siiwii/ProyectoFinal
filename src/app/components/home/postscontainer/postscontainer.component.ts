import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../../services/posts.service';

@Component({
  selector: 'app-postscontainer',
  templateUrl: './postscontainer.component.html',
  styleUrls: ['./postscontainer.component.scss']
})
export class PostscontainerComponent implements OnInit {
 
posts : Array<any>;

  constructor(private postsService: PostsService) { }



  ngOnInit() {
    this.postsService.getAll().subscribe((posts) => {
      this.posts = posts.json();
    })
    }
    
  }

  // Este componente listea todo el json
