import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component implements OnInit, AfterViewInit {
  resNum;
  resAmount;
  resAmountTrue = true;
  payDate;
  payWayOption: string;
  birthdayDate;
  model: any;
  public messageForm: FormGroup;

  natId = localStorage.getItem('natID');
  phoneNo = localStorage.getItem('phoneNo');
  address = localStorage.getItem('address');
  partnerName = localStorage.getItem('partnerName');
  mail = localStorage.getItem('mail');
  socialStuts = localStorage.getItem('socialStuts');
  partnerId = localStorage.getItem('partnerId');
  noPrintedBelowImgInID = localStorage.getItem('noPrintedBelowImgInID');
  name = localStorage.getItem('name');
  public payment: string;
  @ViewChild('paymentMethods') paymentMethods: ElementRef;
  @ViewChild('paymentNo') paymentNo: ElementRef;
  @ViewChild('bankBranchName') bankBranchName: ElementRef;
  @ViewChild('paymentDate') paymentDate: ElementRef;
  // @ViewChild('paymentMethods') paymentMethods: ElementRef;


  getBirthday (natId: string) {
    const birthdayDateUnformatted = natId.substring(1, 7);
    this.birthdayDate = birthdayDateUnformatted.replace(/(\d{2})(\d{2})(\d{2})/, '19$1-$2-$3');
  }


  constructor(public router: Router,
    protected changeRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.getBirthday(this.natId);
    console.log(this.natId);

    localStorage.setItem('birthdayDate', this.birthdayDate);
  }
  ngAfterViewInit() {
    const xxx = document.getElementById('paymentMethods');
    console.log(xxx);
  }
  onPaymentMethodsChanges(value) {
    if (value === '1') {
      this.payment = 'intern';
      this.changeRef.detectChanges();
    } else if (value === '2') {
      this.payment = 'extern';
      this.changeRef.detectChanges();
    } else if (value === '3') {
      this.payment = 'hdb';
      this.changeRef.detectChanges();
    }
    this.changeRef.markForCheck();
    this.changeRef.detectChanges();
    console.log(value);
    console.log(this.payment);

  }


  // getResNum(resNum) {
  //   this.resNum = resNum;
  //   localStorage.setItem ('resNum', resNum);
  // }
  // getResAmount(resAmount) {
  //   this.resAmount = resAmount;
  //   this.resAmountTrue = (!isNaN(resAmount)) && (resAmount.toString().length <= 20);
  //   if (this.resAmountTrue) {
  //    localStorage.setItem('resAmount', resAmount);
  //   }
  // }
  step1Next() {
    this.router.navigateByUrl('/step2');
  }
  getdp(event) {
    this.payDate = event.year + '-' + event.month + '-' + event.day;
    localStorage.setItem('payDate', this.payDate);
  }
  // fireSelection() {
  //   localStorage.setItem('payWayOption', this.payWayOption);
  // }
}
