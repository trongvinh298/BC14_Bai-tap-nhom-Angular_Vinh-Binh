import { Component, OnInit } from '@angular/core';
import { DataService } from '@services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  courseMenu: any = [];
  subCourseMenue: any = new Subscription();
  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.getCourseMenu();
  }

  getCourseMenu() {
    this.subCourseMenue = this.data
      .get('/QuanLyKhoaHoc/LayDanhMucKhoaHoc')
      .subscribe((result: any) => {
        console.log(result);
        this.courseMenu = result;
      });
  }

  ngOnDestroy() {
    this.subCourseMenue.unsubscribe();
  }
}
