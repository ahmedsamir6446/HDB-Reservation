import { LoginComponent } from './../login/login.component';
import { Component, OnInit, Input } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input() auth: boolean;

  // logged: boolean;
  constructor(public router: Router) {
    // this.logged = this.auth;
  }
  ngOnInit() {
  }

  logOut() {
    this.auth = false;
    localStorage.clear();
    this.router.navigateByUrl('/home');
  }

}
