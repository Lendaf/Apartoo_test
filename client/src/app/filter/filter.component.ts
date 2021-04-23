import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { filter } from 'rxjs/operators'
import { FriendService } from '../shared/services/friend.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})

export class FilterComponent implements OnInit {
  types = [
    { value: "race" },
    { value: "food" },
    { value: "family" },
  ]

  param = {
    type: "race",
    filter: "",
  }

  users = null
  filtered = []

  constructor(private friendService: FriendService) { }

  ngOnInit(): void {
    this.friendService.getAllUser()
      .subscribe((res: any) => {
        if (res.status) {
          this.users = res.data
          this.filtered = this.users
        } else {
          alert(res.data)
        }
      })
  }

  filter() {
    this.filtered = []
    from(this.users)
      .pipe(
        filter(x => x[this.param.type] === this.param.filter)
      )
      .subscribe(x => this.filtered.push(x))
  }

}
