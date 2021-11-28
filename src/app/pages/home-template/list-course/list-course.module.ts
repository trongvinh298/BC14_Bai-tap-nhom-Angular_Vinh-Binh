import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListCourseRoutingModule } from './list-course-routing.module';
import { ListCourseComponent } from './list-course.component';
import { ModalComponent } from './modal/modal.component';
import { CourseComponent } from './course/course.component';

@NgModule({
  declarations: [ListCourseComponent, CourseComponent, ModalComponent],
  imports: [CommonModule, ListCourseRoutingModule],
})
export class ListCourseModule {}
