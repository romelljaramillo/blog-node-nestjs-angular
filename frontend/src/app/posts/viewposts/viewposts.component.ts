import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/user/user.interface';
import { Posts } from '../posts.interface';

@Component({
  selector: 'app-viewposts',
  templateUrl: './viewposts.component.html',
  styleUrls: ['./viewposts.component.scss'],
})
export class ViewpostsComponent implements OnInit {
  @Input() posts: Posts[] = [];
  @Input() textSearch: string;
  @Input() users: User[];

  constructor() { }
  ngOnInit() {}


  public renderUserName(post): string { 
    for(let i = 0 ; i < this.users.length; i++) 
      if(this.users[i].id == post.userId) 
        return this.users[i].username;
    
    return '';

  }

}
