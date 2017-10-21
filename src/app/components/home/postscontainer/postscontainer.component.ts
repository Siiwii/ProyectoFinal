import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../../services/posts.service';

@Component({
  selector: 'app-postscontainer',
  templateUrl: './postscontainer.component.html',
  styleUrls: ['./postscontainer.component.scss']
})
export class PostscontainerComponent implements OnInit {
 
titles: string[];

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getAll().subscribe(titles => {
      this.titles = titles.json().map(value => value.title);
    });
    
  }

}
