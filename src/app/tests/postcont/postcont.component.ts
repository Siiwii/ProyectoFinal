import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postcont',
  templateUrl: './postcont.component.html',
  styleUrls: ['./postcont.component.scss']
})
export class PostcontComponent implements OnInit {

  posts: Object[];
  
  constructor() {
    this.posts = [
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

  ngOnInit() {
  }

}
