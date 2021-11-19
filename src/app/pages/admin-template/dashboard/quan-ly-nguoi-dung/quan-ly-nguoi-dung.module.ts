import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuanLyNguoiDungRoutingModule } from './quan-ly-nguoi-dung-routing.module';
import { QuanLyNguoiDungComponent } from './quan-ly-nguoi-dung.component';
import { MaterialModule } from 'src/app/_core/shares/share-module/material-module';
import { ShareModuleModule } from 'src/app/_core/shares/share-module/share-module.module';

@NgModule({
  declarations: [QuanLyNguoiDungComponent],
  imports: [
    CommonModule,
    QuanLyNguoiDungRoutingModule,
    ShareModuleModule,
    MaterialModule,
  ],
})
export class QuanLyNguoiDungModule {}
