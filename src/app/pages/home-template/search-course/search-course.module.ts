import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchCourseRoutingModule } from './search-course-routing.module';
import { SearchCourseComponent } from './search-course.component';


@NgModule({
  declarations: [
    SearchCourseComponent
  ],
  imports: [
    CommonModule,
    SearchCourseRoutingModule
  ]
})
export class SearchCourseModule { }
