import { Component, OnInit } from '@angular/core';
import { FriendService } from 'src/app/shared/services/friend.service';


@Component({
  selector: 'profile-settings',
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

  constructor(private friendService: FriendService) { }

  ngOnInit(): void {
    this.friendService.getCurrentUser(localStorage.username)
      .subscribe((res: any) => {
        if (res.status) {
          this.settings = res.data
        } else {
          alert(res.data)
        }
      })
  }

  updateUser() {
    this.friendService.updateUserInfo(this.settings)
      .subscribe((res: any) => {
        alert(res.data)
      })
  }

}
