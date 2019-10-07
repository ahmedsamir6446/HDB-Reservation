import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.css']
})
export class Step3Component implements OnInit {

  checkboxValue: boolean;
  checked: boolean;
  natId = localStorage.getItem('natID');
  phoneNo = localStorage.getItem('phoneNo');
  address = localStorage.getItem('address');
  partnerName = localStorage.getItem('partnerName');
  mail = localStorage.getItem('mail');
  socialStuts = localStorage.getItem('socialStuts');
  partnerId = localStorage.getItem('partnerId');
  noPrintedBelowImgInID = localStorage.getItem('noPrintedBelowImgInID');
  name = localStorage.getItem('name');
  payDate = localStorage.getItem('payDate');
  resNum = localStorage.getItem ('resNum');
  branchName = localStorage.getItem ('branchName');
  resAmount = localStorage.getItem('resAmount');
  payWayOption = localStorage.getItem('payWayOption');
  gov = localStorage.getItem('gov');
  neih = localStorage.getItem('neih');
  city = localStorage.getItem('city');
  area = localStorage.getItem('area');
  spaceNo = localStorage.getItem('spaceNo');
  adj = localStorage.getItem('adj');
  reg = localStorage.getItem('reg');
  excellence = localStorage.getItem('excellence');
  mesaha = localStorage.getItem('mesaha');
  birthdayDate = localStorage.getItem ('birthdayDate');

  constructor(public router: Router) { }

  ngOnInit() {
  }

  step3Next() {
    this.router.navigateByUrl('/step4');
  }
  toggleEditable() {
    if (this.checkboxValue) {
        this.checked = true;
   } else {
    this.checked = false;
   }
}

}
