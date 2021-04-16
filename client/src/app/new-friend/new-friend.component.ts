import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://localhost:8080/api';

@Component({
  selector: 'app-new-friend',
  templateUrl: './new-friend.component.html',
  styleUrls: ['./new-friend.component.css']
})
export class NewFriendComponent implements OnInit {
  Pangolin = {
    username: '',
    email: '',
    age: '',
    family: '',
    race: '',
    food: '',
    password: '',
    confirmPassword: '',
    friend: []
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  makeFriend() {
    const fd = {
      "0": {
        username: this.Pangolin.username,
        friends: [{username: localStorage.username}]
      },
      "1": {
        username: localStorage.username,
        friends: JSON.parse(localStorage.friends)
      }
    }
    fd[1].friends.push({username: this.Pangolin.username})
    this.http.put(`${BASE_URL}/addFriend`, fd)
      .subscribe(() => console.log("added"))
  }

  SignUp() {
    if (this.Pangolin.password === this.Pangolin.confirmPassword) {
      this.http.post(`${BASE_URL}/signUp`, this.Pangolin)
        .subscribe((res: any) => {
          if (res.status) {
            this.makeFriend()
           window.location.reload()
          } else {
            console.log(res.status)
            alert(res.data)
          }
        })
    }
  }
}
