import { Component, OnInit } from '@angular/core';
import { DataService } from '@services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.scss'],
})
export class ListCourseComponent implements OnInit {
  maDanhMuc: any;
  listCourse: any = [];
  subListCourse: any = new Subscription();

  constructor(
    private activatedRoute: ActivatedRoute,
    private data: DataService
  ) {}

  ngOnInit(): void {
    this.getParamsFromUrl();
    this.getCourse();
  }

  getParamsFromUrl() {
    // Lấy 1 param từ url
    this.maDanhMuc = this.activatedRoute.snapshot.paramMap.get('maDanhMuc');
    console.log(this.maDanhMuc);
  }

  getCourse() {
    this.subListCourse = this.data
      .get(
        `/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${this.maDanhMuc}&MaNhom=GP09`
      )
      .subscribe((result: any) => {
        console.log('result', result);
        this.listCourse = result;
      });
  }
}
