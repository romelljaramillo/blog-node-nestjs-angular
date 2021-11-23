import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from './user.interface';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  private users: User[] = [];
  private user: User;
  title = 'Users blog';
  textS: string;

  constructor(private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const { id } = this.activatedRoute.snapshot.params;
    console.log(id);
    if(id) {
      this.showOne(id);
      this.users = [];
    } else {
      this.showAll();
      this.user = null;
    }
  }

  loadData(event) {
    const { id } = this.activatedRoute.snapshot.params;
    if(!id) {
      this.showAll(event);
    }
  }

  showAll(event?) {
    this.userService.getAll()
      .subscribe(resp => {
        
        if ( resp.length === 0 ) {
          event.target.disabled = true;
          event.target.complete();
          return;
        }

        this.users.push(...resp);

        if ( event ) {
          event.target.complete();
        }
      });
  }

  showOne(id: number) {
    this.userService.getOne(id)
      .subscribe((resp) => {
        console.log(resp);
        this.user = resp;
      });
  }

  searchUser(event) {
    console.log(event)
    this.textS = event;
  }
}
