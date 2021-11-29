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
  selector: 'app-modal-them-khoa-hoc',
  templateUrl: './modal-them-khoa-hoc.component.html',
  styleUrls: ['./modal-them-khoa-hoc.component.scss'],
})
export class ModalThemKhoaHocComponent implements OnInit {
  @Output('courseListUpdated') courseListUpdated: EventEmitter<any> =
    new EventEmitter();

  @ViewChild('closeModal') closeModal: any;
  constructor(private data: DataService) {}

  courseCategory: any = [];
  courseCreator: any = [];
  file: any;

  ngOnInit(): void {
    this.getCategory();
    this.getCreator();
  }
  fileChange(e: any) {
    this.file = e.target.files[0];
  }
  addCourse(course: any) {
    course.danhGia = 0;
    course.luotXem = 0;
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

    this.data.post('QuanLyKhoaHoc/ThemKhoaHocUploadHinh', frm).subscribe(
      (result) => {
        console.log(result);
        this.courseListUpdated.emit();
        this.closeModal.nativeElement.click();
      },
      (err) => {
        alert(err.error);
      }
    );
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
