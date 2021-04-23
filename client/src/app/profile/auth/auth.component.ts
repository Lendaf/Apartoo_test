import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'profile-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  flag = true
  Pangolin = null;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.Pangolin = this.authService.Pangolin
  }

  switch() {
    this.flag = !this.flag
    this.Pangolin = this.authService.Pangolin
  }

  SignIn() {
    this.authService.signIn(this.Pangolin)
      .subscribe((res: any) => {
        if (res.status) {
          localStorage.username = this.Pangolin.username
          window.location.reload()
        } else {
          alert(res.data)
        }
      })
  }

  SignUp() {
    if (this.Pangolin.password === this.Pangolin.confirmPassword) {
      this.authService.signUp(this.Pangolin)
        .subscribe((res: any) => {
          if (res.status) {
            localStorage.username = this.Pangolin.username
            window.location.reload()
          } else {
            alert(res.data)
          }
        })
    }
  }
}
