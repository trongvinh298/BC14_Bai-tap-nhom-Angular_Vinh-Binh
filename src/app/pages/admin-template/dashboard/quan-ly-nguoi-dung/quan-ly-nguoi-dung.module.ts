import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuanLyNguoiDungRoutingModule } from './quan-ly-nguoi-dung-routing.module';
import { QuanLyNguoiDungComponent } from './quan-ly-nguoi-dung.component';
import { MaterialModule } from 'src/app/_core/shares/share-module/material-module';
import { ShareModuleModule } from 'src/app/_core/shares/share-module/share-module.module';
import { ModalThemNguoiDungComponent } from './modal-them-nguoi-dung/modal-them-nguoi-dung.component';
import { FormsModule } from '@angular/forms';
import { ModalSuaNguoiDungComponent } from './modal-sua-nguoi-dung/modal-sua-nguoi-dung.component';
import { ModalGhiDanhKhoaHocComponent } from './modal-ghi-danh-khoa-hoc/modal-ghi-danh-khoa-hoc.component';

@NgModule({
  declarations: [QuanLyNguoiDungComponent, ModalThemNguoiDungComponent, ModalSuaNguoiDungComponent, ModalGhiDanhKhoaHocComponent],
  imports: [
    CommonModule,
    QuanLyNguoiDungRoutingModule,
    ShareModuleModule,
    MaterialModule,
    FormsModule,
  ],
})
export class QuanLyNguoiDungModule {}
