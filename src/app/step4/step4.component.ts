import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.css']
})
export class Step4Component implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  step4Next() {
    this.router.navigateByUrl('/home');
  }
  print() {
    window.print();
  }

}
