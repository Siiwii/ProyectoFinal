import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

@Injectable()
export class PostsService {

  constructor(private http:Http) { }

getAll() : Observable<any>{
  return this.http.get('../../assets/posts.json')
}

}
