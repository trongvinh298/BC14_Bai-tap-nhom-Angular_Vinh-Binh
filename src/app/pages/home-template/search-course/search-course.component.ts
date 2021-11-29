import { Component, OnInit } from '@angular/core';
import { DataService } from '@services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-course',
  templateUrl: './search-course.component.html',
  styleUrls: ['./search-course.component.scss'],
})
export class SearchCourseComponent implements OnInit {
  constructor(
    private data: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  searchCourseList: any[] = [];
  searchValue = this.route.snapshot.paramMap.get('tenKhoaHoc');

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.searchValue = params['tenKhoaHoc'];
      this.searchCourse();
    });
  }

  searchCourse() {
    this.data
      .get(
        `QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${this.searchValue}&MaNhom=GP01`
      )
      .subscribe(
        (result) => {
          this.searchCourseList = result;
          console.log(result);
        },
        (err) => {
          this.searchCourseList = [];
        }
      );
  }
}
