import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '@services/data.service';

@Component({
  selector: 'app-modal-ghi-danh-nguoi-dung',
  templateUrl: './modal-ghi-danh-nguoi-dung.component.html',
  styleUrls: ['./modal-ghi-danh-nguoi-dung.component.scss'],
})
export class ModalGhiDanhNguoiDungComponent implements OnInit {
  @Input() selectedCourseID: any;

  constructor(private data: DataService) {}

  unregisterUserList: any = [];
  waitingApprovalUserList: any = [];

  registerData: any = {
    maKhoaHoc: '',
    taiKhoan: '',
  };

  ngOnInit(): void {
    this.getUnregisterList();
    this.getWaitingApprovalUserList();
  }

  getUnregisterList() {
    console.log(this.selectedCourseID);
    this.data
      .post(
        'QuanLyNguoiDung/LayDanhSachNguoiDungChuaGhiDanh',
        this.selectedCourseID
      )
      .subscribe((result) => {
        console.log(result);
        this.unregisterUserList = result;
      });
  }
  registerCourse(course: any) {
    this.registerData.taiKhoan = course.taiKhoan;
    this.registerData.maKhoaHoc = this.selectedCourseID.maKhoaHoc;
    this.data
      .postN('QuanLyKhoaHoc/GhiDanhKhoaHoc', this.registerData)
      .subscribe((result) => {
        console.log(result);
        alert(result);
      });
  }

  getWaitingApprovalUserList() {
    console.log(this.selectedCourseID);
    this.data
      .post(
        'QuanLyNguoiDung/LayDanhSachHocVienChoXetDuyet',
        this.selectedCourseID
      )
      .subscribe((result) => {
        console.log(result);
        this.waitingApprovalUserList = result;
      });
  }
}
