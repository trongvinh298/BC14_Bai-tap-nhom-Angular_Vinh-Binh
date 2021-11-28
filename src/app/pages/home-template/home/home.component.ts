import { Component, OnInit } from '@angular/core';
import { DataService } from '@services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  listCourse: any = [];
  subListCourse: any = new Subscription();
  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.getHomeCourse();
  }

  getHomeCourse() {
    this.subListCourse = this.data
      .get(
        '/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=1&pageSize=8&MaNhom=GP09'
      )
      .subscribe((result: any) => {
        console.log('result', result.items);
        this.listCourse = result.items;
      });
  }

  ngOnDestroy() {
    this.subListCourse.unsubscribe();
  }
}
