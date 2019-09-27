import { DataService } from './data.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css'],
  providers: [
    DataService,
  ],
})
export class Step2Component implements OnInit {

  govList;
  subDistrictList;
  regionList;
  cityList;
  districtList;
  landList;
  subDistrictListDisabled = false;
  regionListDisabled = false;
  districtListDisabled = false;
  cityListDisabled = false;
  landListDisabled = false;

  constructor(public router: Router,
    protected changeRef: ChangeDetectorRef,
    protected data: DataService) {
    this.cityList = data.cityList;
    this.govList = data.govList;
    this.subDistrictList = data.subDistrictsList;
    this.districtList = data.districtList;
    this.landList = data.landList;
    this.regionList = data.regionList;
  }

  ngOnInit() {
  }

  step2Next() {
    this.router.navigateByUrl('/step3');
  }
  setDefault() {
    this.subDistrictListDisabled = false;
    this.regionListDisabled = false;
    this.districtListDisabled = false;
    this.cityListDisabled = false;
    this.landListDisabled = false;
    this.cityList = this.data.cityList;
    this.govList = this.data.govList;
    this.subDistrictList = this.data.subDistrictsList;
    this.districtList = this.data.districtList;
    this.landList = this.data.landList;
    this.regionList = this.data.regionList;
  }
  fireGovSelection(event) {
    // this.setDefault();
    const govId = +event;
    this.cityList = this.data.cityList;
    const cities = this.cityList.filter(item => item.govId === govId);
    this.cityList = cities;
    if (this.cityList.length === 0) {
      this.cityListDisabled = true;
      this.regionListDisabled = true;
      this.districtListDisabled = true;
      this.subDistrictListDisabled = true;
      this.landListDisabled = true;
    } else if (this.cityList.length === 1) {
      const returnedCityId = this.cityList[0].cityId;
      this.fireCitySelection(returnedCityId);
      this.changeRef.detectChanges();
    } else {
      this.fireCitySelection(this.cityList[0].cityId);
    }
  }
  fireCitySelection(event) {
    const cityId = +event;
    this.regionList = this.data.regionList;
    const regions = this.regionList.filter(item => item.cityId === cityId);
    console.log(regions);
    this.regionList = regions;
    if (this.regionList.length === 0) {
      this.regionListDisabled = true;
      this.districtListDisabled = true;
      this.subDistrictListDisabled = true;
      this.landListDisabled = true;
    } else if (this.regionList.length === 1) {
      const returnedRegionId = this.regionList[0].regionId;
      this.fireRegionSelection(returnedRegionId);
      this.changeRef.detectChanges();
    }
  }
  fireRegionSelection(event) {
    const regionId = +event;
    this.districtList = this.data.districtList;
    const districts = this.districtList.filter(item => item.regionId === regionId);
    this.districtList = districts;
    if (this.districtList.length === 0) {
      this.districtListDisabled = true;
      this.subDistrictListDisabled = true;
      this.landListDisabled = true;
    } else if (this.districtList.length === 1) {
      const returnedDistrictId = this.districtList[0].districtId;
      this.fireDistrictSelection(returnedDistrictId);
      this.changeRef.detectChanges();
    }
  }
  fireDistrictSelection(event) {
    const districtId = +event;
    this.subDistrictList = this.data.subDistrictsList;
    const subDistricts = this.subDistrictList.filter(item => item.districtId === districtId);
    this.subDistrictList = subDistricts;
    if (this.subDistrictList.length === 0) {
      this.districtListDisabled = true;
      this.landListDisabled = true;
    } else if (this.subDistrictList.length === 1) {
      const returnedSubDistrictId = this.subDistrictList[0].subDistrictId;
      this.fireSubDistrictSelection(returnedSubDistrictId);
      this.changeRef.detectChanges();
    }
  }
  fireSubDistrictSelection(event) {
    const subDistrictId = +event;
    this.landList = this.data.landList;
    const lands = this.landList.filter(item => item.subDistrictId === subDistrictId);
    this.landList = lands;
    if (this.landList.length === 0) {
      this.landListDisabled = true;
    }
  }

}
