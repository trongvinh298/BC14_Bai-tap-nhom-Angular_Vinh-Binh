import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/_core/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm') loginForm: any;
  constructor(private data: DataService, private router: Router) {}

  ngOnInit(): void {}

  login(user: any) {
    console.log('đã click');
    this.data.post(`QuanLyNguoiDung/DangNhap`, user).subscribe(
      (result) => {
        console.log(result);
        if (result.maLoaiNguoiDung === 'GV') {
          //Luu trang thai xuong LocalStorage
          localStorage.setItem('UserAdmin', JSON.stringify(result));

          //chuyen huong toi trang dashboard
          this.router.navigate(['/admin/dashboard']);
        } else {
          alert('Tài khoản không có quyền truy cập');
        }
      },
      (err) => {
        alert(err.error);
      }
    );
  }
}
