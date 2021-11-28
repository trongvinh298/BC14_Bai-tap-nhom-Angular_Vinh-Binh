import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/_core/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm') loginForm: any;
  constructor(private data: DataService) {}

  ngOnInit(): void {}

  login(user: any) {
    this.data.post(`QuanLyNguoiDung/DangNhap`, user).subscribe((result) => {
      console.log(result);
    });
  }
}
