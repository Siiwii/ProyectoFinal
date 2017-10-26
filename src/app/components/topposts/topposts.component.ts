import { Component, OnInit } from '@angular/core';
import { SortbyratePipe } from '../../pipes/sortbyrate.pipe';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-topposts',
  templateUrl: './topposts.component.html',
  styleUrls: ['./topposts.component.scss']
})
export class ToppostsComponent implements OnInit {

  posts: Array<any>;

  constructor(private postsService: PostsService) { }



  ngOnInit() {
    this.postsService.getAll().subscribe((posts) => {
      this.posts = posts.json();
    })
  }

}