import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Stock', url: '/user', icon: 'library' },
    { title: 'Management', url: '/show-user', icon: 'list-circle' },
    { title: 'About', url: '/add-user', icon: 'person-circle' },
    
  ];
  public labels = [];
  constructor() {}
}
