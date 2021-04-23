import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Apartoo-test';
  links = [
    { path: 'auth' },
    { path: 'profile' },
    { path: 'users' }
  ]

  disconnect() {
    localStorage.username = ""
  }
}
