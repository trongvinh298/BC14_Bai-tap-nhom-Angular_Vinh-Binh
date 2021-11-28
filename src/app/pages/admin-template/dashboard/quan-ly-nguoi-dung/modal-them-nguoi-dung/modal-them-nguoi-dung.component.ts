import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import { DataService } from '@services/data.service';

@Component({
  selector: 'app-modal-them-nguoi-dung',
  templateUrl: './modal-them-nguoi-dung.component.html',
  styleUrls: ['./modal-them-nguoi-dung.component.scss'],
})
export class ModalThemNguoiDungComponent implements OnInit {
  @Output('userListUpdated') userListUpdated: EventEmitter<any> =
    new EventEmitter();
  @ViewChild('closeModal') closeModal: any;

  constructor(private data: DataService) {}
  ngOnInit(): void {}
  addUser(user: any) {
    user.maNhom = 'GP01';

    this.data.post('QuanLyNguoiDung/ThemNguoiDung', user).subscribe(
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
}
