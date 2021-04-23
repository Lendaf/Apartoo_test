import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isConnected = false
  newFriend = false
  button_newFriend = "Add a new friend"

  constructor() { }

  ngOnInit(): void {
    if (localStorage.username != "") {
      this.isConnected = true
    }
  }

  changeState() {
    this.newFriend = !this.newFriend
    if (this.newFriend) {
      this.button_newFriend = "Close"
    } else {
      this.button_newFriend = "Add a new friend"
    }
  }
}
