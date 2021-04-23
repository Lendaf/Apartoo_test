import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthService } from './shared/services/auth.service';
import { FriendService } from './shared/services/friend.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    AuthService,
    FriendService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
