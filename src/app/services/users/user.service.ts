import { Injectable } from '@angular/core';
import { User } from '../../models/users';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {
  person: User[];

  constructor() { }

  getPerson(): Observable<any> {
      return Observable.of(this.person);
  }

  savePerson(person) {
      this.person = person;
  }
}





//   createUser( user: User ) {
//     this.users.unshift(user);
//     let users;
//     if (localStorage.getItem('users') == null) {
//       users = [];
//       users.unshift(user);
//       localStorage.setItem('users', JSON.stringify(users));
//     } else {
//       users = JSON.parse(localStorage.getItem('users'));
//       users.unshift(user);
//     }
//   }

//   getUsers() {
//     if (localStorage.getItem('users') == null) {
//       this.users = [];
//     } else {
//       this.users = JSON.parse(localStorage.getItem('users'))
//     }
//     return this.users;
//   }

//   deleteUser(user: User) {
//     for ( let i = 0; i < this.users.length; i++) {
//       if ( user == this.users[i] ){
//         this.users.splice(1,1);
//         localStorage.setItem('users', JSON.stringify(this.users))
//       }
//     }
//   }
// }