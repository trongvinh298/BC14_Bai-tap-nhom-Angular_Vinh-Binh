import { Component, OnInit } from '@angular/core';
import { DataService } from '@services/data.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-quan-ly-nguoi-dung',
  templateUrl: './quan-ly-nguoi-dung.component.html',
  styleUrls: ['./quan-ly-nguoi-dung.component.scss'],
})
export class QuanLyNguoiDungComponent implements OnInit {
  listUser: any = [];
  subListUser: any = new Subscription();

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.getUser();
  }
  ngOnChanges(): void {
    this.getUser();
  }
  getUser() {
    this.subListUser = this.data
      .get('/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01')
      .subscribe((result: any) => {
        console.log(result);
        this.listUser = result;
      });
  }

  deleteUser(user: any) {
    this.data
      .delete(`/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${user.taiKhoan}`)
      .subscribe((result: any) => {
        console.log(result);
        this.ngOnInit();
      });
  }

  ngOnDestroy() {
    this.subListUser.unsubscribe();
  }
}
