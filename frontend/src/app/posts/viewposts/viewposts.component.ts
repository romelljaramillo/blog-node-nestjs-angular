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

}
