import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../../services/posts.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

post: any;

  constructor( private route: ActivatedRoute, private postsService: PostsService ) { }

private getPost(id:number){
  this.postsService.get(id).subscribe((post) => {
    this.post = post.json();
  })

}


  ngOnInit() {
    this.route.params.subscribe((params) => {
      let id = params['id'];
      this.getPost(id);
    })
  }

}


// Este componente solo obtiene posiciones en el array del JSON