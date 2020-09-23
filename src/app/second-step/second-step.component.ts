import { DataService, TableData } from './data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-step',
  templateUrl: './second-step.component.html',
  styleUrls: ['./second-step.component.css'],
})
export class SecondStepComponent implements OnInit {
  localStorageAlice = localStorage;
  public data: TableData[];
  public regionList: string[];
  public govList: string[];
  public areaList: string[];
  public excellenceList: string[];
  public landList: string[];
  public cityList: string[];
  constructor(protected service: DataService) {}

  ngOnInit() {
    this.service.getAllData().subscribe(data => this.data = data);
    this.regionList = this.data.map(data => data.region);
    this.govList = this.data.map(data => data.gov);
    this.areaList = this.data.map(data => data.area);
    this.excellenceList = this.data.map(data => data.excellence);
    this.districtList = this.data.map(data => data.district);
    this.subDistrictList = this.data.map(data => data.subdistrict);
    this.landList = this.data.map(data => data.land);
    this.cityList = this.data.map(data => data.city);
  }
  donothing() {}
}
