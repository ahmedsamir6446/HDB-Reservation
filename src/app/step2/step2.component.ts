import { Component, OnInit } from '@angular/core';
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

  govList = [
    {gov : 'cairo', value : 1},
    {gov : 'Sohag', value : 2},
  ]; // government
  areaList = [
    {area : '4995', vlaue : 1},
    {area : '234', vlaue : 2},
  ]; // Areas
  adjList = [
    {adj : '3', value : 1},
    {adj : '4', value : 2},
  ];
  regList = [
    {reg : 'الشريط المميز - شرق طريق مطار سوهاج الدولى', value : 1},
    {reg : ' (ب)-شمال  الحديقه المركزيه', value : 2},
  ];
  cityList = [
    {city: 'سوهاج', value : 1},
    {city: 'city2', value : 2},
  ];
  neihList = [
    {neih : ' الحى الرابع - مشروع بيت الوطن', value : 1},
    {neih : ' الحى الرابع - مشروع بيت الوطن', value : 2},
  ];
  spaceNoList = [
    {spaceNo : '177', value : 1},
    {spaceNo : '19877', value : 2},
  ];

  constructor(public router: Router) { }

  ngOnInit() {
  }

  step2Next() {
    this.router.navigateByUrl('/step3');
  }
  fireSelection() {
    if (this.gov && this.neih && this.city && this.area && this.spaceNo && this.adj && this.reg) {
      console.log(this.gov, this.reg, this.neih, this.city, this.area, this.adj);
      localStorage.setItem('gov', this.gov);
      localStorage.setItem('neih', this.neih);
      localStorage.setItem('city', this.city);
      localStorage.setItem('area', this.area);
      localStorage.setItem('spaceNo', this.spaceNo);
      localStorage.setItem('adj', this.adj);
      localStorage.setItem('reg', this.reg);
    }

  }

}
