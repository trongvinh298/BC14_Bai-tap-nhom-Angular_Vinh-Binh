import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/_core/services/data.service';

@Component({
  selector: 'app-detail-course',
  templateUrl: './detail-course.component.html',
  styleUrls: ['./detail-course.component.scss'],
})
export class DetailCourseComponent implements OnInit {
  id: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private data: DataService
  ) {}

  ngOnInit(): void {
    this.getParamsFromUrl();
    this._getDetailCourse();
  }

  getParamsFromUrl() {
    // Lấy 1 param từ url
    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    //Lấy nhiều params từ url
    this.activatedRoute.queryParams.subscribe((params: any) => {
      console.log(params);
    });
  }

  _getDetailCourse() {
    this.data
      .get(`/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${this.id}`)
      .subscribe((result) => {
        console.log(result);
      });
  }
}
