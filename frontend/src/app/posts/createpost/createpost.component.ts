import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Posts } from '../posts.interface';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.scss'],
})
export class CreatepostComponent implements OnInit {
  private title = 'Create post'
  post: Posts;
  @Input() id: number;

  constructor(
    private modalCtrl: ModalController,
    private postsService: PostsService,
    private activatedRoute: ActivatedRoute,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    // const { id } = this.activatedRoute.snapshot.params;
    console.log(this.id)

    if (this.id !== 0) {
      this.postsService.getOne(this.id)
        .subscribe((resp: Posts) => {
          this.post = resp;
          this.post.id = this.id;
          console.log(this.post)
        });
    }
  }

  exitForm() {
    this.modalCtrl.dismiss();
  }

  savePost(formposts: NgForm) {
    console.log(formposts.value);
    if (formposts.invalid) { return; }

    let peticion: Observable<Posts>;

    if (this.post.id) {
      peticion = this.postsService.update(this.post);
      console.log('Actualizado: ',peticion)

    } else {
      peticion = this.postsService.create(this.post);
      console.log('Creado: ',peticion)

    }

    peticion.subscribe( resp => {
        console.log(resp)
        return this.presentAlert(resp);
      }
    
    );
  }

  async presentAlert(post: Posts) {
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: 'Success',
      subHeader: post.title,
      message: `The pos ${post.id} has been updated.`,
      buttons: ['exit']
    });

    await alert.present();
  }
}
