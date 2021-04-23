import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersComponent } from './users.component';
import { FilterComponent } from './filter/filter.component';

import { UsersRoutingModule } from './users-routing.module';
import { MaterialModule } from '../material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UsersComponent,
    FilterComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
