import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = 'http://localhost:8080/api';

@Injectable({
  providedIn: 'root'
})
export class FriendService {
  users = null

  currentUser = null

  constructor(private http: HttpClient) { }

  updateInfo(newUsers, newCurrentUser) {
    this.users = newUsers
    this.currentUser = newCurrentUser
  }

  getCurrentUser(username) {
    return this.http.get(`${BASE_URL}/findUser?username=${username}`)
  }

  getAllUser() {
    return this.http.get(`${BASE_URL}/getAllUser`)
  }

  deleteFriend(fd) {
    return this.http.put(`${BASE_URL}/deleteFriend`, fd)
  }

  addFriend(fd) {
    return this.http.put(`${BASE_URL}/addFriend`, fd)
  }

  updateUserInfo(fd) {
    return this.http.put(`${BASE_URL}/updateUser`, fd)
  }
}
