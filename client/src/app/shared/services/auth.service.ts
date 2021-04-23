import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = 'http://localhost:8080/api';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

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

  signIn(user) {
    return this.http.get(`${BASE_URL}/signIn?username=${user.username}&password=${user.password}`)
  }

  signUp(user) {
    return this.http.post(`${BASE_URL}/signUp`, user)
  }
}
