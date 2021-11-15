import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { environment } from './../../../environments/environment';

let urlApi = '';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {
    urlApi = environment.urlApi;
  }

  get(uri: any): Observable<any> {
    const url = `${urlApi}/${uri}`;
    return this.http.get(url).pipe(
      tap(() => {}),
      catchError((error: any) => {
        return this.handleError(error);
      })
    );
  }
  post(uri: any, data: any): Observable<any> {
    const url = `${urlApi}/${uri}`;

    return this.http.post(url, data).pipe(
      tap(() => {}),
      catchError((error: any) => {
        return this.handleError(error);
      })
    );
  }

  // getListCourse(): Observable<any> {
  //   const url =
  //     'https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01';
  //   return this.http.get(url).pipe(
  //     tap(() => {}),
  //     catchError((error: any) => {
  //       return this.handleError(error);
  //     })
  //   );
  // }

  // getDetailCourse(id: any): Observable<any> {
  //   const url = `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${id}`;
  //   return this.http.get(url).pipe(
  //     tap(() => {}),
  //     catchError((error: any) => {
  //       return this.handleError(error);
  //     })
  //   );
  // }

  // registerUser(user: any): Observable<any> {
  //   const url = `https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy`;
  //   return this.http.post(url, user).pipe(
  //     tap(() => {}),
  //     catchError((error: any) => {
  //       return this.handleError(error);
  //     })
  //   );
  // }

  // login(user: any): Observable<any> {
  //   const url = `https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap`;
  //   return this.http.post(url, user).pipe(
  //     tap(() => {}),
  //     catchError((error: any) => {
  //       return this.handleError(error);
  //     })
  //   );
  // }

  // addUser(user: any): Observable<any> {
  //   const url = `https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung`;
  //   return this.http.post(url, user).pipe(
  //     tap(() => {}),
  //     catchError((error: any) => {
  //       return this.handleError(error);
  //     })
  //   );
  // }

  handleError(error: any) {
    switch (error.status) {
      case 300:
        break;
      case 400:
        break;
      case 500:
        break;
      default:
        break;
    }
    return throwError(error);
  }
}
