import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Post } from '../model/post';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PostsService {

  constructor(private http:Http) {}

  private postUrl = 'https://jsonplaceholder.typicode.com/photos/';

getAll() : Observable<Post[]> {
  return this.http
                  .get(this.postUrl)
                  .map(response => response.json().data as Post[])
                  .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
                  }
}

 get(id:number){
   return this.http.get('https://jsonplaceholder.typicode.com/photos/' + id);
 }

 }
