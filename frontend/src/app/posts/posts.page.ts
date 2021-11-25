import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { User } from '../user/user.interface';
import { UserService } from '../user/user.service';
import { Posts } from './posts.interface';
import { PostsService } from './posts.service';
import { CreatepostComponent } from './createpost/createpost.component';

@Component({
  selector: 'posts-page',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {

  private posts: Posts[] = [];
  users: User[] = [];
  private post: Posts;
  title = 'Posts blog';
  textS: string;

  constructor(private postsService: PostsService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    public modalController: ModalController
  ) { }

  ngOnInit() {
    const { id } = this.activatedRoute.snapshot.params;
    console.log(id);
    if (id) {
      this.showOne(id);
      this.posts = [];
    } else {
      this.showAll();
      this.post = null;
    }
  }

  loadData(event) {
    const { id } = this.activatedRoute.snapshot.params;
    if (!id) {
      this.showAll(event);
    }
  }

  showAll(event?) {
    this.userService.getAll()
      .subscribe(resp => {
        if (resp.length === 0) {
          event.target.disabled = true;
          event.target.complete();
          return;
        }

        this.users.push(...resp);

        if (event) {
          event.target.complete();
        }
      });

    this.postsService.getAll()
      .subscribe(resp => {

        if (resp.length === 0) {
          event.target.disabled = true;
          event.target.complete();
          return;
        }

        this.posts.push(...resp);

        if (event) {
          event.target.complete();
        }
      });
  }

  showOne(id: number) {
    this.postsService.getOne(id)
      .subscribe((resp) => {
        this.post = resp;
      });
  }

  getUserName(id: number) {
    this.userService.getOne(id)
      .subscribe((resp) => resp.username);
  }

  searchPost(event: string) {
    this.textS = event;
  }

  async createPosts() {
    const modal = await this.modalController.create({
      component: CreatepostComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
}
