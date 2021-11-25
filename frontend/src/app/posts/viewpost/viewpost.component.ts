import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { User } from 'src/app/user/user.interface';
import { UserService } from 'src/app/user/user.service';
import { CreatepostComponent } from '../createpost/createpost.component';
import { Posts } from '../posts.interface';

@Component({
  selector: 'app-viewpost',
  templateUrl: './viewpost.component.html',
  styleUrls: ['./viewpost.component.scss'],
})
export class ViewpostComponent implements OnInit {

  @Input() post: Posts;
  @Input() users: User[];

  constructor(public modalController: ModalController) { }
  ngOnInit() {}

  public renderUserName(id: number): string { 
    for(let i = 0 ; i < this.users.length; i++) {
      if(this.users[i].id == id) return this.users[i].username;
    }
    return '';
  }

  async editPosts(id: number){
    const modal = await this.modalController.create({
      component: CreatepostComponent,
      componentProps: {
        id: id,
      },
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

}