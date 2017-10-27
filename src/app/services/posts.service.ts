import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Post } from '../model/post';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class PostsService {

constructor(private http:Http) {}

private postUrl = 'https://jsonplaceholder.typicode.com/photos/';

  getAll() : Observable<Post[]> {
  return this.http
                  .get(this.postUrl)
                  .map((response: Response) => response.json() as Post[])
                  .catch(this.handleError);
  }


  getPost(id: number) : Observable<Post> {
  return this.getAll()
                      .map((posts: Post[]) => {
                        return posts.find(post => post.id === id)            
                      });
                    
                        
  } 

  private handleError(error: Response) {
  console.error(error);
  let message = `Código de status error ${error.status} en ${error.url}`;
  return Observable.throw(message);
  }
}
