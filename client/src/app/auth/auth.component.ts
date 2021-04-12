import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://localhost:8080/api';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  flag = true

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

  switch() {
    this.flag = !this.flag
    this.Pangolin = {
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
  }

  SignIn() {
    this.http.get(`${BASE_URL}/signIn?username=${this.Pangolin.username}&password=${this.Pangolin.password}`, {responseType: 'text'})
      .subscribe(res => {
        if (res === "Connected") {
          localStorage.username = this.Pangolin.username
          window.location.reload()
        } else {
          alert(res)
        }
      })
  }

  SignUp() {
    if (this.Pangolin.password === this.Pangolin.confirmPassword) {
      this.http.post(`${BASE_URL}/signUp`, this.Pangolin, {responseType: 'text'})
        .subscribe(res => {
          console.log(res)
          if (res === "User successfully added to db") {
            localStorage.username = this.Pangolin.username
            window.location.reload()
          } else {
            alert(res)
          }
        })
    }
  }
}
