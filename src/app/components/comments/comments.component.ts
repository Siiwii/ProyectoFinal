import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Comment } from '../../models/comment';
import { User } from '../../models/users';
import { UserService } from '../../services/users/user.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  
  person:any;

  constructor(
    private userService: UserService
  ) {}

  @Input() comment: Comment;
  @Output() deleteComment = new EventEmitter<boolean>();

  canModify: boolean;

  ngOnInit() {
    this.userService.getPerson().subscribe(data => {
      this.person = data;
    });
  }

  deleteClicked() {
    this.deleteComment.emit(true);
  }


}