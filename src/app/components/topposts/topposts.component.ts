import { Component, OnInit } from '@angular/core';
import { SortbyratePipe } from '../../pipes/sortbyrate.pipe';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../model/post';

@Component({
  selector: 'app-topposts',
  templateUrl: './topposts.component.html',
  styleUrls: ['./topposts.component.scss']
})
export class ToppostsComponent implements OnInit {

  posts: Post[];
  errorMessage: string;

  constructor(private postsService: PostsService) { }



  ngOnInit() { this.getPosts() }

  getPosts() {
    this.postsService.getAll()
      .subscribe(
        posts => this.posts = posts,
        error => this.errorMessage = error
      );
  }

}