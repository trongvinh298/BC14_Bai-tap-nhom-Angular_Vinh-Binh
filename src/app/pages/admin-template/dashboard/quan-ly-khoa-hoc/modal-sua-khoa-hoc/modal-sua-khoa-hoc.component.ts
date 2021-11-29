import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core';

import { DataService } from '@services/data.service';
import * as moment from 'moment';

@Component({
  selector: 'app-modal-sua-khoa-hoc',
  templateUrl: './modal-sua-khoa-hoc.component.html',
  styleUrls: ['./modal-sua-khoa-hoc.component.scss'],
})
export class ModalSuaKhoaHocComponent implements OnInit {
  @Output('courseListUpdated') courseListUpdated: EventEmitter<any> =
    new EventEmitter();

  @ViewChild('closeModal') closeModal: any;
  constructor(private data: DataService) {}

  selectedCourse: any;
  courseCategory: any = [];
  courseCreator: any = [];
  file: any;

  ngOnInit(): void {
    this.getCategory();
    this.getCreator();
  }
  editCourse(course: any) {
    course.maNhom = 'GP01';
    course.ngayTao = moment(course.ngayTao).format('DD/MM/yyyy');
    let frm = new FormData();
    for (let key in course) {
      if (key !== 'hinhAnh') {
        frm.append(key, course[key]);
      } else {
        frm.append('hinhAnh', this.file);
      }
    }
    this.data.post('QuanLyKhoaHoc/CapNhatKhoaHocUpload', frm).subscribe(
      (result: any) => {
        console.log(result);
        this.courseListUpdated.emit();
        this.closeModal.nativeElement.click();
      },
      (err) => {
        console.log(err);
      }
    );
  }
  _updateForm(id: any) {
    this.data
      .get(`QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${id}`)
      .subscribe((result) => {
        console.log(result);

        this.selectedCourse = result;
      });
  }
  fileChange(e: any) {
    this.file = e.target.files[0];
  }

  getCategory() {
    this.data.get('QuanLyKhoaHoc/LayDanhMucKhoaHoc').subscribe((result) => {
      this.courseCategory = result;
    });
  }
  getCreator() {
    this.data
      .get('QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01')
      .subscribe((result) => {
        this.courseCreator = result;
      });
  }
}
