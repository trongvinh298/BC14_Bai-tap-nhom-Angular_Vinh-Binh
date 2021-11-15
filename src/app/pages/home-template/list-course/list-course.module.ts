import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListCourseRoutingModule } from './list-course-routing.module';
import { ListCourseComponent } from './list-course.component';
import { CourseComponent } from './course/course.component';
import { ModalComponent } from './modal/modal.component';


@NgModule({
  declarations: [
    ListCourseComponent,
    CourseComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    ListCourseRoutingModule
  ]
})
export class ListCourseModule { }
