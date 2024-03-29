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
    this.getWaitingApprovalUserList();
    this.getApprovedUserList();
  }

  getUnregisterList() {
    this.data
      .post(
        'QuanLyNguoiDung/LayDanhSachNguoiDungChuaGhiDanh',
        this.selectedCourseID
      )
      .subscribe((result) => {
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
        this.ngOnInit();
      });
  }

  approveUser(id: any) {
    this.registerData.taiKhoan = id;
    this.registerData.maKhoaHoc = this.selectedCourseID.maKhoaHoc;
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

  getWaitingApprovalUserList() {
    this.data
      .post(
        'QuanLyNguoiDung/LayDanhSachHocVienChoXetDuyet',
        this.selectedCourseID
      )
      .subscribe((result) => {
        this.waitingApprovalUserList = result;
      });
  }
  getApprovedUserList() {
    this.data
      .post('QuanLyNguoiDung/LayDanhSachHocVienKhoaHoc', this.selectedCourseID)
      .subscribe((result) => {
        this.approvedUserList = result;
      });
  }

  unApproveUser(id: any) {
    this.unRegisterData.taiKhoan = id;
    this.unRegisterData.maKhoaHoc = this.selectedCourseID.maKhoaHoc;
    this.data
      .postN('QuanLyKhoaHoc/HuyGhiDanh', this.unRegisterData)
      .subscribe((result) => {
        this.ngOnInit();
      });
  }
}
