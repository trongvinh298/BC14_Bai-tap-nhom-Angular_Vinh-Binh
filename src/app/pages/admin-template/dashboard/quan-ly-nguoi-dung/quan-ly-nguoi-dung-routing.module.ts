import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuanLyNguoiDungComponent } from './quan-ly-nguoi-dung.component';

const routes: Routes = [
  {
    path: '',
    component: QuanLyNguoiDungComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuanLyNguoiDungRoutingModule {}
