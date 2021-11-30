import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '@services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  id: any;
  userId: any = {
    taiKhoan: '',
    matKhau: '',
  };
  listCourse: any;

  user: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private data: DataService
  ) {}

  ngOnInit(): void {
    this.getParamsFromUrl();
    this._getUser();
  }

  getParamsFromUrl() {
    // Lấy 1 param từ url
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }
  _getUser() {
    this.userId = JSON.parse(localStorage.getItem('UserId') || ``);
    this.data
      .post(`/QuanLyNguoiDung/ThongTinTaiKhoan`, this.userId)
      .subscribe((result) => {
        this.user = result;
        this.listCourse = this.user.chiTietKhoaHocGhiDanh;
        console.log(this.listCourse);
      });
    // this.data
    // .get(
    //   `/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01&tuKhoa=${this.id}`
    // )
    // .subscribe((result) => {
    //   this.user = result[0];
    //   console.log(this.user);
    // });
  }
}
