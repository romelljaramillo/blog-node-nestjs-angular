import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user.interface';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.scss'],
})
export class ViewuserComponent implements OnInit {

  @Input() user: User;

  constructor() { }

  ngOnInit() {}

}
