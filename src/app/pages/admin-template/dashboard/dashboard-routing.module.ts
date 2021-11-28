import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      //quan ly nguoi dung
      {
        path: 'quan-ly-nguoi-dung',
        loadChildren: () =>
          import('./quan-ly-nguoi-dung/quan-ly-nguoi-dung.module').then(
            (m) => m.QuanLyNguoiDungModule
          ),
      },

      //quan ly khoa hoc
      {
        path: 'quan-ly-khoa-hoc',
        loadChildren: () =>
          import('./quan-ly-khoa-hoc/quan-ly-khoa-hoc.module').then(
            (m) => m.QuanLyKhoaHocModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
