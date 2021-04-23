import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../shared/services/auth.service';
import { FriendService } from '../../shared/services/friend.service';

const BASE_URL = 'http://localhost:8080/api';

@Component({
  selector: 'profile-new-friend',
  templateUrl: './new-friend.component.html',
  styleUrls: ['./new-friend.component.css']
})
export class NewFriendComponent implements OnInit {
  Pangolin = null

  constructor(private authService: AuthService, private friendService: FriendService) { }

  ngOnInit(): void {
    this.Pangolin = this.authService.Pangolin
  }

  makeFriend() {
    const fd = {
      "0": {
        username: this.Pangolin.username,
        friends: [{username: localStorage.username}]
      },
      "1": {
        username: localStorage.username,
        friends: this.friendService.currentUser.friends
      }
    }
    fd[1].friends.push({username: this.Pangolin.username})
    this.friendService.addFriend(fd)
      .subscribe(() => {
        console.log("added")
        window.location.reload()
      })
  }

  SignUp() {
    if (this.Pangolin.password === this.Pangolin.confirmPassword) {
      this.authService.signUp(this.Pangolin)
        .subscribe((res: any) => {
          console.log(res)
          if (res.status) {
            this.makeFriend()
          } else {
            alert(res.data)
          }
        })
    } else {
      alert("password and confirm password should be the same")
    }
  }
}
