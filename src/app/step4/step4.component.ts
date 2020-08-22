import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersAuthService } from '../users-auth.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.css']
})
export class Step4Component implements OnInit {
  landTitle;

  constructor(public router: Router, protected route: ActivatedRoute, protected auth: UsersAuthService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.landTitle = this.auth.getLandTitle(+params['id']);
    });
  }

  step4Next() {
    this.router.navigateByUrl('/home');
  }
  print() {
    window.print();
  }

}
