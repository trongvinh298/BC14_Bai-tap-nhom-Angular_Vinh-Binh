import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeTemplateComponent } from './home-template.component';

const routes: Routes = [
  {
    path: '',
    component: HomeTemplateComponent,
    children: [
      //home
      {
        path: '',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },
      //about
      {
        path: 'about',
        loadChildren: () =>
          import('./about/about.module').then((m) => m.AboutModule),
      },
      //list course
      {
        path: 'list-course/:maDanhMuc',
        loadChildren: () =>
          import('./list-course/list-course.module').then(
            (m) => m.ListCourseModule
          ),
      },
      //search course
      {
        path: 'search-course/:tenKhoaHoc',
        loadChildren: () =>
          import('./search-course/search-course.module').then(
            (m) => m.SearchCourseModule
          ),
      },
      //detail course
      {
        path: 'detail/:id',
        loadChildren: () =>
          import('./detail-course/detail-course.module').then(
            (m) => m.DetailCourseModule
          ),
      },

      //register
      {
        path: 'register',
        loadChildren: () =>
          import('./register/register.module').then((m) => m.RegisterModule),
      },
      //login
      {
        path: 'login',
        loadChildren: () =>
          import('./login/login.module').then((m) => m.LoginModule),
      },
      //user page
      {
        path: 'user/:id',
        loadChildren: () =>
          import('./user/user.module').then((m) => m.UserModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeTemplateRoutingModule {}
