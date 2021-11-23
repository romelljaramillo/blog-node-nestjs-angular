import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/user/user.interface';
import { UserService } from 'src/app/user/user.service';
import { Posts } from '../posts.interface';

@Component({
  selector: 'app-viewpost',
  templateUrl: './viewpost.component.html',
  styleUrls: ['./viewpost.component.scss'],
})
export class ViewpostComponent implements OnInit {

  @Input() post: Posts;
  @Input() users: User[];

  constructor() { }
  ngOnInit() {}


  public renderUserName(post): string { 
    for(let i = 0 ; i < this.users.length; i++) {
      if(this.users[i].id == post.userId) return this.users[i].username;
    }
    return '';

  }


}