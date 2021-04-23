import { Component, OnInit } from '@angular/core';
import { FriendService } from '../../shared/services/friend.service';

@Component({
  selector: 'profile-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  users = [{ username: '' }]

  currentUser = {
    username: localStorage.username,
    friends: [{ username: '' }]
  }

  constructor(private friendService: FriendService) { }

  ngOnInit(): void {
    this.friendService.getCurrentUser(localStorage.username)
      .subscribe((res: any) => {
        if (res.status) {
          this.currentUser.friends = res.data.friends
        } else {
          alert(res.data)
        }
      })
    this.friendService.getAllUser()
      .subscribe((res: any) => {
        if (res.status) {
          this.users = res.data
          this.checkFriend()
          this.friendService.updateInfo(this.users, this.currentUser)
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
    const fd = {
      "0": {
        username: unfriend.username,
        friends: [{username: this.currentUser.username}]
      },
      "1": this.currentUser
    }
    this.users.push(unfriend)
    this.currentUser.friends = this.currentUser.friends.filter(user => user.username !== unfriend.username)
    this.friendService.deleteFriend(fd)
      .subscribe(() => {
        this.friendService.updateInfo(this.users, this.currentUser)
        console.log("deleted")
      })
  }

  addFriends (newFriend: any) {
    const fd = {
      "0": {
        username: newFriend.username,
        friends: [{username: this.currentUser.username}]
      },
      "1": this.currentUser
    }
    this.currentUser.friends.push(newFriend)
    this.users = this.users.filter(user => user.username !== newFriend.username)
    this.friendService.addFriend(fd)
      .subscribe(() => {
        this.friendService.updateInfo(this.users, this.currentUser)
        console.log("added")
      })
}

}
