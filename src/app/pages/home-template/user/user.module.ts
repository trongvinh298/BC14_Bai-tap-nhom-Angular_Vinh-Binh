import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserCourseComponent } from './user-course/user-course.component';


@NgModule({
  declarations: [
    UserComponent,
    UserInfoComponent,
    UserCourseComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
