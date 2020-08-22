import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersAuthService } from '../users-auth.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.css']
})
export class Step3Component implements OnInit {

  checkboxValue: boolean;
  checked: boolean;
  landTitle;
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
  selectedRow;

  constructor(public router: Router, protected route: ActivatedRoute, protected auth: UsersAuthService) { }

  ngOnInit() {
    this.selectedRow = JSON.parse(localStorage.getItem('selectedRow'));
    this.route.params.subscribe((params) => {
      this.landTitle = this.auth.getLandTitle(+params['id']);
    });

  }

  step3Next() {
    this.router.navigateByUrl(`/step4/${localStorage.getItem('chosenLand')}`);
  }
  step3back() {
    this.router.navigateByUrl(`/step2/${localStorage.getItem('chosenLand')}`);
  }
  toggleEditable() {
    if (this.checkboxValue) {
        this.checked = true;
   } else {
    this.checked = false;
   }
}

}
