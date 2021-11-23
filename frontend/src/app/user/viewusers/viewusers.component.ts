import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user.interface';

@Component({
  selector: 'app-viewusers',
  templateUrl: './viewusers.component.html',
  styleUrls: ['./viewusers.component.scss'],
})
export class ViewusersComponent implements OnInit {
  @Input() users: User[] = [];
  @Input() textSearch: string;
  
  constructor() { }

  ngOnInit() {}

}
