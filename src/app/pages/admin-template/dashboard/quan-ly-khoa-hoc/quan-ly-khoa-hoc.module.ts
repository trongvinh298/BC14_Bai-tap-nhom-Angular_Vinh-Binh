import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuanLyKhoaHocRoutingModule } from './quan-ly-khoa-hoc-routing.module';
import { QuanLyKhoaHocComponent } from './quan-ly-khoa-hoc.component';
import { MaterialModule } from 'src/app/_core/shares/share-module/material-module';
import { FormsModule } from '@angular/forms';
import { ModalThemKhoaHocComponent } from './modal-them-khoa-hoc/modal-them-khoa-hoc.component';
import { ModalSuaKhoaHocComponent } from './modal-sua-khoa-hoc/modal-sua-khoa-hoc.component';
import { ModalGhiDanhNguoiDungComponent } from './modal-ghi-danh-nguoi-dung/modal-ghi-danh-nguoi-dung.component';

@NgModule({
  declarations: [QuanLyKhoaHocComponent, ModalThemKhoaHocComponent, ModalSuaKhoaHocComponent, ModalGhiDanhNguoiDungComponent],
  imports: [
    CommonModule,
    QuanLyKhoaHocRoutingModule,
    MaterialModule,
    FormsModule,
  ],
})
export class QuanLyKhoaHocModule {}
