import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbDateStruct, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';

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


  getBirthday(natId: string) {
    const birthdayDateUnformatted = natId.substring(1, 7);
    this.birthdayDate = birthdayDateUnformatted.replace(/(\d{2})(\d{2})(\d{2})/, '19$1-$2-$3');
  }


  constructor(public router: Router,
    protected changeRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.getBirthday(this.natId);

    localStorage.setItem('birthdayDate', this.birthdayDate);
    // const urlParams = [];
    // window.location.search.replace('?', '').split('&').forEach(function (e, i) {
    //   const p = e.split('=');
    //   urlParams[p[0]] = p[1];
    // });

    // // We have all the params now -> you can access it by name

    // if (urlParams['loaded']) {

    // } else {

    //   const win = (window as any);
    //   win.location.search = '?loaded=1';
    //   // win.location.reload('?loaded=1');
    // }

  }
  ngAfterViewInit() {
    const xxx = document.getElementById('paymentNo');
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
  step1Next(resNum, payDate, branchName) {
    console.log(resNum, payDate, branchName);
    localStorage.setItem('payDate', payDate);
    localStorage.setItem('resNum', resNum);
    localStorage.setItem('branchName', branchName);
    this.getPayWayOption();
    this.router.navigateByUrl('/step2');
  }
  getdp(event) {
    this.payDate = event.day + '/' + event.month + '/' + event.year;
    localStorage.setItem('payDate', this.payDate);
  }
  getPayWayOption() {
    if (this.payment === 'intern') {
      localStorage.setItem('payWayOption', 'تحويل داخلي ');
    } else if (this.payment === 'extern') {
      localStorage.setItem('payWayOption', 'تحويل خارجي');
    } else if (this.payment === 'hdb') {
      localStorage.setItem('payWayOption', 'تحويل داخلي من فروع بنك التعمير');
    }
  }
}
