import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuanLyKhoaHocComponent } from './quan-ly-khoa-hoc.component';

const routes: Routes = [
  {
    path: '',
    component: QuanLyKhoaHocComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuanLyKhoaHocRoutingModule {}
