import { DataService } from './data.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component implements OnInit {

  gov;
  area;
  adj;
  reg;
  city;
  neih;
  spaceNo;
  disableDifault = true;

  govList = [
    { govId: 0, gov: 'برجاء الاختيار', value: '0' },
    { govId: 1, gov: 'القاهرة', value: '1' },
    { govId: 2, gov: 'الاسكمدرية', value: '2' },
    { govId: 3, gov: 'بورسعيد', value: '3' },
    { govId: 4, gov: 'السويس', value: '4' },
    { govId: 11, gov: 'دمياط', value: '11' },
    { govId: 12, gov: 'الدقهلية', value: '12' },
    { govId: 13, gov: 'الشرقية', value: '13' },
    { govId: 14, gov: 'القليوبية', value: '14' },
    { govId: 15, gov: 'كفر الشيخ', value: '15' },
    { govId: 16, gov: 'الغربية', value: '16' },
    { govId: 17, gov: 'المنوفية', value: '17' },
    { govId: 18, gov: 'البحيرة', value: '18' },
    { govId: 19, gov: 'الاسماعيلية', value: '19' },
    { govId: 21, gov: 'الجيزة', value: '21' },
    { govId: 22, gov: 'بني سويف', value: '22' },
    { govId: 23, gov: 'الفيوم', value: '23' },
    { govId: 24, gov: 'المنيا', value: '24' },
    { govId: 25, gov: 'اسيوط', value: '25' },
    { govId: 26, gov: 'سوهاج', value: '26' },
    { govId: 27, gov: 'قنا', value: '27' },
    { govId: 28, gov: 'اسوان', value: '28' },
    { govId: 29, gov: 'الاقصر', value: '29' },
    { govId: 31, gov: 'البحيرة', value: '31' },
    { govId: 32, gov: 'الوادي الجديد', value: '32' },
    { govId: 33, gov: 'مطروح', value: '33' },
    { govId: 34, gov: 'شمال سيناء', value: '34' },
    { govId: 35, gov: 'جنوب سيناء', value: '35' },
    { govId: 88, gov: 'خارج الجمهورية', value: '88' },
  ]; // government
  cityList = [
    { cityId: 0, govId: 0, city: 'برجاء الاختيار', value: '0' },
    { cityId: 1, govId: 1, city: 'القاهرة الجديدة', value: '1' },
    { cityId: 2, govId: 1, city: 'الشروق', value: '2' },
    { cityId: 3, govId: 1, city: 'بدر', value: '3' },
    { cityId: 4, govId: 21, city: '15مايو', value: '4' },
    { cityId: 5, govId: 21, city: '6أكتوبر', value: '5' },
    { cityId: 6, govId: 21, city: 'الشيخ زايد', value: '6' },
    { cityId: 7, govId: 1, city: 'العبور', value: '7' },
    { cityId: 8, govId: 13, city: 'العاشر من رمضان', value: '8' },
    { cityId: 9, govId: 11, city: 'دمياط الجديدة', value: '9' },
    { cityId: 10, govId: 22, city: 'بنى سويف الجديدة', value: '10' },
    { cityId: 11, govId: 28, city: 'اسوان الجديدة', value: '11' },
    { cityId: 12, govId: 2, city: 'برج العرب الجديدة', value: '12' },
    { cityId: 13, govId: 26, city: 'سوهاج الجديدة', value: '13' },
  ];
  areaList = [
    { area: '280', vlaue: 1 },
    { area: '400', vlaue: 2 },
    { area: '566', vlaue: 3 },
    { area: '600', vlaue: 4 },
    { area: '602', vlaue: 5 },
    { area: '607', vlaue: 6 },
    { area: '608', vlaue: 7 },
    { area: '620', vlaue: 8 },
    { area: '631', vlaue: 9 },
    { area: '633', vlaue: 10 },
    { area: '647', vlaue: 11 },
    { area: '653', vlaue: 12 },
    { area: '655', vlaue: 13 },
    { area: '670', vlaue: 14 },
    { area: '757', vlaue: 15 },
    { area: '761', vlaue: 16 },
    { area: '801', vlaue: 17 },
    { area: '802', vlaue: 18 },
    { area: '815', vlaue: 19 },
    { area: '816', vlaue: 20 },
    { area: '819', vlaue: 21 },
    { area: '822', vlaue: 22 },
    { area: '834', vlaue: 23 },
    { area: '835', vlaue: 24 },
    { area: '848', vlaue: 25 },
    { area: '849', vlaue: 26 },
    { area: '852', vlaue: 27 },
    { area: '853', vlaue: 28 },
    { area: '860', vlaue: 29 },
    { area: '864', vlaue: 30 },
    { area: '874', vlaue: 31 },
    { area: '876', vlaue: 32 },
    { area: '896', vlaue: 33 },
    { area: '898', vlaue: 34 },
    { area: '900', vlaue: 35 },
    { area: '951', vlaue: 36 },
    { area: '968', vlaue: 37 },
    { area: '1964', vlaue: 38 },
    { area: '3176', vlaue: 39 },
    { area: '4107', vlaue: 40 },
    { area: '4479', vlaue: 41 },
  ]; // Areas
  adjList = [
    { adj: 'لا يوجد', value: 1 },
  ];
  regList = [
    { cityId: 1, govId: 1, reg: 'reg 1', value: 1 },
    { cityId: 1, govId: 1, reg: 'reg 2', value: 2 },
    { cityId: 4, govId: 21, reg: 'reg 3', value: 3 },
    { cityId: 4, govId: 21, reg: 'reg 4', value: 4 },
    // { reg: 'reg 5', value: 5 },
    // { reg: 'reg 6', value: 6 },
    // { reg: 'reg 7', value: 7 },
    // { reg: 'reg 8', value: 8 },
    // { reg: 'reg 9', value: 9 },
    // { reg: '16023', value: 10 },
    // { reg: '16039', value: 11 },
    // { reg: '16062', value: 12 },
    // { reg: '16064', value: 13 },
    // { reg: '16070', value: 14 },
    // { reg: '16073', value: 15 },
    // { reg: '16078', value: 16 },
    // { reg: '18001', value: 17 },
    // { reg: '18004', value: 18 },
    // { reg: '18008', value: 19 },
    // { reg: '18011', value: 20 },
    // { reg: '18012', value: 21 },
    // { reg: '18034', value: 22 },
    // { reg: '18045', value: 23 },
    // { reg: '18048', value: 24 },
    // { reg: '18051', value: 25 },
    // { reg: '18054', value: 26 },
    // { reg: '18055', value: 27 },
    // { reg: '18057', value: 28 },
    // { reg: '18065', value: 29 },
    // { reg: '18066', value: 30 },
    // { reg: '18067', value: 31 },
    // { reg: '18068', value: 32 },
    // { reg: '18076', value: 33 },
    // { reg: '18086', value: 34 },
    // { reg: '19063', value: 35 },
    // { reg: '25017', value: 36 },
    // { reg: '25020', value: 37 },
    // { reg: 'بلوك 2', value: 38 },
    // { reg: 'بلوك33ا', value: 39 },
  ];
  neihList = [
    { neih: 'الثانى', value: 1 },
    { neih: 'الرابع', value: 2 },
    { neih: 'الخامس', value: 3 },
    { neih: 'السادس', value: 4 },
    { neih: 'السابع', value: 5 },
    { neih: 'التاسع', value: 6 },
    { neih: 'الترفيفهى', value: 7 },
  ];
  spaceNoList = [
    { spaceNo: '1', value: 1 },
    { spaceNo: '2', value: 2 },
    { spaceNo: '3', value: 3 },
    { spaceNo: '4', value: 4 },
    { spaceNo: '5', value: 5 },
    { spaceNo: '6', value: 6 },
    { spaceNo: '7', value: 7 },
    { spaceNo: '8', value: 8 },
    { spaceNo: '9', value: 9 },
    { spaceNo: '10', value: 10 },
    { spaceNo: '11', value: 11 },
    { spaceNo: '12', value: 12 },
    { spaceNo: '13', value: 13 },
    { spaceNo: '14', value: 14 },
    { spaceNo: '15', value: 15 },
    { spaceNo: '16', value: 16 },
    { spaceNo: '17', value: 17 },
    { spaceNo: '18', value: 18 },
    { spaceNo: '19', value: 19 },
    { spaceNo: '21', value: 22 },
    { spaceNo: '277', value: 21 },
  ];

  constructor(public router: Router, protected changeRef: ChangeDetectorRef) { }

  ngOnInit() {
  }

  step2Next() {
    this.router.navigateByUrl('/step3');
  }
  fireGovernoratesSelection(event) {
    console.log(event);
    const govId = +event;
    console.log();

    const cities = this.cityList.filter( item => item.govId === govId);
    this.cityList = cities;
    console.log(cities);

    }

  }
