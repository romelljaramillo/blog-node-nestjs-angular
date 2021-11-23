import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Posts', url: '/posts', icon: 'newspaper' },
    { title: 'Users', url: '/users', icon: 'people' },
    { title: 'Api doc', url: 'http://localhost:3000/docs', icon: 'archive', external: true },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}

  gotoDocsApi(url: string) : void {
    window.open(url, '_blank');
  }
}
