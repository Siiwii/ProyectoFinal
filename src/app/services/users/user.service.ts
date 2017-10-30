import { Injectable } from '@angular/core';
import { User } from '../../models/users';

@Injectable()
export class UserService {
users: User[];

  createUser( user: User ) {
    this.users.unshift(user);
    let users;
    if (localStorage.getItem('users') == null) {
      users = [];
      users.unshift(user);
      localStorage.setItem('users', JSON.stringify(users));
    } else {
      users = JSON.parse(localStorage.getItem('users'));
      users.unshift(user);
    }
  }

  getUsers() {
    if (localStorage.getItem('users') == null) {
      this.users = [];
    } else {
      this.users = JSON.parse(localStorage.getItem('users'))
    }
    return this.users;
  }

  deleteUser(user: User) {
    for ( let i = 0; i < this.users.length; i++) {
      if ( user == this.users[i] ){
        this.users.splice(1,1);
        localStorage.setItem('users', JSON.stringify(this.users))
      }
    }
  }
}