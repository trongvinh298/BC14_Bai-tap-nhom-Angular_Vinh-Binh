import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '@services/data.service';
import { Subscription } from 'rxjs';
import { ModalSuaNguoiDungComponent } from './modal-sua-nguoi-dung/modal-sua-nguoi-dung.component';
@Component({
  selector: 'app-quan-ly-nguoi-dung',
  templateUrl: './quan-ly-nguoi-dung.component.html',
  styleUrls: ['./quan-ly-nguoi-dung.component.scss'],
})
export class QuanLyNguoiDungComponent implements OnInit {
  @ViewChild(ModalSuaNguoiDungComponent)
  modalSuaNguoiDung: ModalSuaNguoiDungComponent = new ModalSuaNguoiDungComponent(
    this.data
  );
  @ViewChild('search') search: any;
  @ViewChild('searchValue') searchValue: any;

  listUser: any = [];
  searchListUser: any = [];

  subListUser: any = new Subscription();

  constructor(private data: DataService) {}

  searchName: string = '';

  ngOnInit(): void {
    this.getUser();
    this.findUser(this.searchValue?.nativeElement.value);
  }

  getUser() {
    this.subListUser = this.data
      .get('QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01')
      .subscribe((result: any) => {
        console.log(result);
        this.listUser = result;
      });
  }

  deleteUser(user: any) {
    this.data
      .delete(`QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${user.taiKhoan}`)
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
  findUser(name: any) {
    this.data
      .get(`QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01&tuKhoa=${name}`)
      .subscribe((result: any) => {
        console.log(result);
        this.searchListUser = result;
      });
  }
  updateForm(id: any) {
    this.modalSuaNguoiDung._updateForm(id);
  }

  ngOnDestroy() {
    this.subListUser.unsubscribe();
  }
}
