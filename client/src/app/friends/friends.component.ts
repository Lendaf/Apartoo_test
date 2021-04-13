import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://localhost:8080/api';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  users = [{ username: '' }]

  currentUser = {
    username: localStorage.username,
    friends: [{ username: '' }]
  }
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(`${BASE_URL}/findUser?username=${localStorage.username}`)
      .subscribe((res: any) => {
        if (res.status) {
          this.currentUser.friends = res.data.friends
        } else {
          alert(res.data)
        }
      })
    this.http.get(`${BASE_URL}/getAllUser`)
      .subscribe((res: any) => {
        if (res.status) {
          this.users = res.data
          this.checkFriend()
        } else {
          alert(res.data)
        }
      })
  }

  checkFriend() {
    this.users = this.users.filter(user => (user.username !== this.currentUser.username))
    for (let cpt = 0; cpt < this.currentUser.friends.length; ++cpt) {
      this.users = this.users.filter(user => (user.username !== this.currentUser.friends[cpt].username))
    }
  }

  deleteFriends (unfriend: any) {
    this.users.push(unfriend)
    this.currentUser.friends = this.currentUser.friends.filter(user => user.username !== unfriend.username)
    this.http.put(`${BASE_URL}/updateUser`, this.currentUser)
    .subscribe(() => console.log("deleted"))
  }

  addFriends (newFriend: any) {
    this.currentUser.friends.push(newFriend)
    this.users = this.users.filter(user => user.username !== newFriend.username)
    this.http.put(`${BASE_URL}/updateUser`, this.currentUser)
      .subscribe(() => console.log("added"))
  }

}
