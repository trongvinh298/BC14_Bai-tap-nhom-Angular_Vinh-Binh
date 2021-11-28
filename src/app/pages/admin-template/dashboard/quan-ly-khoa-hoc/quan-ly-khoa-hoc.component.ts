import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '@services/data.service';
import { Subscription } from 'rxjs';
import { ModalSuaKhoaHocComponent } from './modal-sua-khoa-hoc/modal-sua-khoa-hoc.component';

@Component({
  selector: 'app-quan-ly-khoa-hoc',
  templateUrl: './quan-ly-khoa-hoc.component.html',
  styleUrls: ['./quan-ly-khoa-hoc.component.scss'],
})
export class QuanLyKhoaHocComponent implements OnInit {
  @ViewChild(ModalSuaKhoaHocComponent)
  modalSuaKhoaHoc: ModalSuaKhoaHocComponent = new ModalSuaKhoaHocComponent(
    this.data
  );
  @ViewChild('search') search: any;
  @ViewChild('searchValue') searchValue: any;

  listCourse: any = [];
  searchListCourse: any = [];
  searchName: any;
  selectedCourseID: any = {
    maKhoaHoc: '',
  };

  subListCourse: any = new Subscription();

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.getCourse();
    this.findCourse(this.searchValue?.nativeElement.value);
  }

  getCourse() {
    this.subListCourse = this.data
      .get('QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01')
      .subscribe(
        (result: any) => {
          console.log(result);
          this.listCourse = result;
        },
        (err) => {
          console.log(err);
        }
      );
  }

  deleteCourse(course: any) {
    this.data
      .delete(`QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${course.maKhoaHoc}`)
      .subscribe(
        (result: any) => {
          console.log(result);
          this.ngOnInit();
        },
        (err) => {
          alert(err.error);
        }
      );
  }
  findCourse(course: any) {
    this.data
      .get(`QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${course}&MaNhom=GP01`)
      .subscribe((result) => {
        console.log(result);
        this.searchListCourse = result;
      });
  }
  updateForm(id: any) {
    this.modalSuaKhoaHoc._updateForm(id);
  }

  getCourseID(course: any) {
    this.selectedCourseID.maKhoaHoc = course.maKhoaHoc;
    console.log(this.selectedCourseID);
  }

  ngOnDestroy() {
    this.subListCourse.unsubscribe();
  }
}
