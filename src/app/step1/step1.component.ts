import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component implements OnInit {
  resNum;
  resAmount;
  resAmountTrue = true;
  payDate;
  payWayOption: string;
  payWayList = [
    { name: 'Swift', value: 1 },
    { name: 'ACH', value: 2 },
    { name: 'تحویل داخلى بنك التعمیر والاسكان', value: 3 }
  ];

  natId = localStorage.getItem('natID');
  phoneNo = localStorage.getItem('phoneNo');
  address = localStorage.getItem('address');
  partnerName = localStorage.getItem('partnerName');
  mail = localStorage.getItem('mail');
  socialStuts = localStorage.getItem('socialStuts');
  partnerId = localStorage.getItem('partnerId');
  noPrintedBelowImgInID = localStorage.getItem('noPrintedBelowImgInID');
  name = localStorage.getItem('name');


  constructor(public router: Router) {
  }

  ngOnInit() {

  }

  getResNum(resNum) {
    this.resNum = resNum;
    localStorage.setItem ('resNum', resNum);
  }
  getResAmount(resAmount) {
    this.resAmount = resAmount;
    this.resAmountTrue = (!isNaN(resAmount)) && (resAmount.toString().length <= 20);
    if (this.resAmountTrue) {
     localStorage.setItem('resAmount', resAmount);
    }
  }
  step1Next() {
    this.router.navigateByUrl('/step2');
  }
  getdp(event) {
    this.payDate = event.year + '-' + event.month + '-' + event.day;
    localStorage.setItem('payDate', this.payDate);
  }
  fireSelection() {
    localStorage.setItem('payWayOption', this.payWayOption);
  }
}
