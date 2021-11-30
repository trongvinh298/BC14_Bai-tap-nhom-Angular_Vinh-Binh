import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '@services/data.service';

@Component({
  selector: 'app-user-course',
  templateUrl: './user-course.component.html',
  styleUrls: ['./user-course.component.scss'],
})
export class UserCourseComponent implements OnInit {
  @Input() course: any;
  constructor() {}

  ngOnInit(): void {
    console.log(this.course);
  }
}
