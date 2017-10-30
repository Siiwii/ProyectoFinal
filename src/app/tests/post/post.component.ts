import { Component, Input } from '@angular/core';
import { Post } from '../post/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent {

  post: Object[];


  constructor() {
   this.post = [
        {
          titulo: 'Hola1',
          texto: 'holapepito',
          footer: 'holasoyunfooter'
        },
        {
          titulo: 'Hola2',
          texto: 'holapepe',
          footer: 'holasoyotrofooter'
        },
        {
          titulo: 'Ultimo post',
          texto: 'Por fin',
          footer: 'Voy a terminar'
        }
      ];
    }
  }


