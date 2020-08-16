import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersAuthService } from '../users-auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  logged = false;
  constructor(public router: Router, protected usersAuth: UsersAuthService) {
    this.logged =  JSON.parse(localStorage.getItem('userLoggedIn'));
  }

  ngOnInit() {
  }
  checkAndGo(page) {
    if (this.logged) {
      this.router.navigateByUrl(`/reserve/${page}`);
      this.usersAuth.clearLands();
      localStorage.removeItem('chosenLand');
      localStorage.setItem('chosenLand', page);
      this.usersAuth.saveLand(page);
    }
  }

}
