import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '@services/data.service';

@Component({
  selector: 'app-modal-ghi-danh-khoa-hoc',
  templateUrl: './modal-ghi-danh-khoa-hoc.component.html',
  styleUrls: ['./modal-ghi-danh-khoa-hoc.component.scss'],
})
export class ModalGhiDanhKhoaHocComponent implements OnInit {
  @Input() selectedUserID: any;

  constructor(private data: DataService) {}

  unregisterCourseList: any = [];
  waitingApprovalCourseList: any = [];
  approvedUserList: any = [];

  registerData: any = {
    maKhoaHoc: '',
    taiKhoan: '',
  };

  unRegisterData: any = {
    maKhoaHoc: '',
    taiKhoan: '',
  };

  ngOnInit(): void {
    this.getUnregisterList();
    this.getWaitingApprovalCourseList();
    this.getApprovedCourseList();
  }

  getUnregisterList() {
    this.data
      .post(
        'QuanLyNguoiDung/LayDanhSachKhoaHocChuaGhiDanh',
        this.selectedUserID
      )
      .subscribe((result) => {
        this.unregisterCourseList = result;
      });
  }
  registerCourse(course: any) {
    this.registerData.maKhoaHoc = course.maKhoaHoc;
    this.registerData.taiKhoan = this.selectedUserID.taiKhoan;
    this.data
      .postN('QuanLyKhoaHoc/GhiDanhKhoaHoc', this.registerData)
      .subscribe((result) => {
        console.log(result);
        alert(result);
        this.ngOnInit();
      });
  }

  approveCourse(id: any) {
    this.registerData.maKhoaHoc = id;
    this.registerData.taiKhoan = this.selectedUserID.taiKhoan;
    this.data
      .postN('QuanLyKhoaHoc/GhiDanhKhoaHoc', this.registerData)
      .subscribe(
        (result) => {
          console.log(result);
          alert(result);
          this.ngOnInit();
        },
        (err) => {
          console.log(err);
        }
      );
  }

  getWaitingApprovalCourseList() {
    this.data
      .post(
        'QuanLyNguoiDung/LayDanhSachKhoaHocChoXetDuyet',
        this.selectedUserID
      )
      .subscribe((result) => {
        this.waitingApprovalCourseList = result;
      });
  }
  getApprovedCourseList() {
    this.data
      .post('QuanLyNguoiDung/LayDanhSachKhoaHocDaXetDuyet', this.selectedUserID)
      .subscribe((result) => {
        this.approvedUserList = result;
      });
  }

  unApproveCourse(id: any) {
    this.unRegisterData.taiKhoan = id;
    this.unRegisterData.maKhoaHoc = this.selectedUserID.maKhoaHoc;
    this.data
      .postN('QuanLyKhoaHoc/HuyGhiDanh', this.unRegisterData)
      .subscribe((result) => {
        this.ngOnInit();
      });
  }
}
