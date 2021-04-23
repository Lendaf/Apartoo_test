import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { ProfileRoutingModule } from './profile-routing.module';

import { ProfileComponent } from './profile.component';
import { SettingsComponent } from './settings/settings.component';
import { NewFriendComponent } from './new-friend/new-friend.component';
import { FriendsComponent } from './friends/friends.component';
import { AuthComponent } from './auth/auth.component';


@NgModule({
  declarations: [
    ProfileComponent,
    SettingsComponent,
    NewFriendComponent,
    FriendsComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
