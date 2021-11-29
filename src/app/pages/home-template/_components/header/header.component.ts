import { Component, OnInit } from '@angular/core';
import { DataService } from '@services/data.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  courseMenu: any = [];
  subCourseMenue: any = new Subscription();
  constructor(private data: DataService, private router: Router) {}

  ngOnInit(): void {
    this.getCourseMenu();
  }

  getCourseMenu() {
    this.subCourseMenue = this.data
      .get('/QuanLyKhoaHoc/LayDanhMucKhoaHoc')
      .subscribe((result: any) => {
        this.courseMenu = result;
      });
  }

  searchCourse(course: any) {
    this.router.navigate([`/search-course/${course.tenKhoaHoc}`]);
  }

  ngOnDestroy() {
    this.subCourseMenue.unsubscribe();
  }
}
