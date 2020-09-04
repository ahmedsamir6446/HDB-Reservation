import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersAuthService } from '../users-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userAuthObjectIndex: any;
  userId;
  userpw;
  idsList;
  pwList;
  userIdStatus;
  userpwStatus;
  userLoggedIn;
  public loginForm: FormGroup;
  capatchResponded = false;
  public siteKey = '6Ldc0McZAAAAAA06Hqi14Apb5RhDxPFrMPNWnqym';

  constructor(
    public router: Router,
    protected usersAuth: UsersAuthService,
    protected fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      password: ['', Validators.required],
      username: ['', Validators.required],
      // recaptchaReactive: [null],
    });
  }

  ngOnInit() {
    this.idsList = this.usersAuth.idsList;
    this.pwList = this.usersAuth.pwList;
  }
  resolved(ev) {
    this.capatchResponded = true;

  }
  onLoginSubmit() {
    if (this.loginForm.invalid || this.capatchResponded) {
      return;
    }
    this.userId = this.loginForm.get('username').value;
    this.userpw = this.loginForm.get('password').value;
    this.userIdStatus = this.idsList.some((x) => x === this.userId);
    this.userpwStatus = this.pwList.some((x) => x === this.userpw);
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
