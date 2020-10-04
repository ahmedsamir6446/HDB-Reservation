import { LoginComponent } from './../login/login.component';
import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  date: Date;
  // tslint:disable-next-line:no-input-rename
  @Input() auth: boolean;
  public menu = true;
  public close = false;

  // logged: boolean;
  constructor(public router: Router, protected cd: ChangeDetectorRef) {
    // this.logged = this.auth;
    setInterval(() => {
      this.date = new Date();
    }, 1000);
  }
  ngOnInit() {}
  public showMenu() {
    if (this.menu) {
      this.close = true;
      this.menu = false;
    } else if (this.close) {
      this.close = false;
      this.menu = true;
    }
    this.cd.markForCheck();
  }

  logOut() {
    this.auth = false;
    localStorage.clear();
    this.router.navigateByUrl('/home');
  }
}
