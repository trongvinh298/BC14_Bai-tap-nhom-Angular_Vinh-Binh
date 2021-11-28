import {
  Component,
  OnInit,
  ViewChild,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { DataService } from '@services/data.service';

@Component({
  selector: 'app-modal-sua-nguoi-dung',
  templateUrl: './modal-sua-nguoi-dung.component.html',
  styleUrls: ['./modal-sua-nguoi-dung.component.scss'],
})
export class ModalSuaNguoiDungComponent implements OnInit {
  @Input() listUser: any;
  @Output('userListUpdated') userListUpdated: EventEmitter<any> =
    new EventEmitter();

  @ViewChild('closeModal') closeModal: any;

  constructor(private data: DataService) {}

  selectedUser: any;

  ngOnInit(): void {}
  editUser(user: any) {
    user.maNhom = 'GP01';

    this.data.put('QuanLyNguoiDung/CapNhatThongTinNguoiDung', user).subscribe(
      (result: any) => {
        console.log(result);
        this.userListUpdated.emit();
        this.closeModal.nativeElement.click();
      },
      (err) => {
        alert(err.error);
      }
    );
  }
  _updateForm(id: any) {
    this.data
      .get('QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01')
      .subscribe((result) => {
        console.log(result);
        let userUpdate: any;
        userUpdate = result.find((user: any) => {
          return user.taiKhoan === id;
        });
        this.selectedUser = userUpdate;
        console.log(userUpdate);
      });
  }
}
