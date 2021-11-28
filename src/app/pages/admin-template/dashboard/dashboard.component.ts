import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router) {}
  userLogin: any;
  ngOnInit(): void {
    let obj: any = localStorage.getItem('UserAdmin');
    this.userLogin = JSON.parse(obj);
    console.log(this.userLogin.hoTen);
  }
  logOut() {
    this.router.navigate(['/auth']);
    localStorage.clear();
    console.log('Log out thanh cong');
  }
}
