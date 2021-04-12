import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://localhost:8080/api';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})

export class SettingsComponent implements OnInit {
  settings = {
    age: '',
    family: '',
    race: '',
    food: '',
  }

  data = {}

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(`${BASE_URL}/findUser?username=${localStorage.username}`)
      .subscribe((res: any) => {
        if (res.status) {
          this.settings = res.data
        } else {
          alert(res.data)
        }
      })
  }

  updateUser() {
    this.http.put(`${BASE_URL}/updateUser`, this.settings)
      .subscribe((res: any) => {
        alert(res.data)
      })
  }

}
