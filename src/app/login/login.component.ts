import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersAuthService } from '../users-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userAuthObjectIndex: any;
  userId ;
  userpw ;
  idsList;
  pwList;
  userIdStatus;
  userpwStatus;
  userLoggedIn;

  constructor(public router: Router, public usersAuth: UsersAuthService) {
  }

  ngOnInit() {
    this.idsList = this.usersAuth.idsList;
    this.pwList = this.usersAuth.pwList;


  }
  onSubmits() {
    this.userIdStatus = this.idsList.some(x => x === this.userId);
    this.userpwStatus = this.pwList.some(x => x === this.userpw);
    this.userAuthObjectIndex = this.idsList.indexOf(this.userId);
    // localStorage.setItem('userObjectName', this.userAuthObjectIndex);
    this.userLoggedIn = this.userIdStatus && this.userpwStatus;


    if (this.userLoggedIn) {
      localStorage.setItem('userLoggedIn', 'true');
      this.usersAuth.saveUser(this.userAuthObjectIndex);
      this.router.navigateByUrl('/home');
    }
  }
  getuserId(userId: number) {
    this.userId = userId;
  }
  getuserpw(userpw: string) {
    this.userpw = userpw;
  }

}
