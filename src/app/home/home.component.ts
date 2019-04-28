import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  logged = false;
  constructor(public router: Router) {
    this.logged =  JSON.parse(localStorage.getItem('userLoggedIn'));
    console.log(this.logged);

  }

  ngOnInit() {
  }
  checkAndGo() {
    if (this.logged) {
      this.router.navigateByUrl('/reserve');
    }
  }

}
