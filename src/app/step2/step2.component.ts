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
  subDistrictList = [];
  regionList = [];
  cityList = [];
  districtList = [];
  landList = [];

  constructor(public router: Router,
    protected changeRef: ChangeDetectorRef,
    protected data: DataService) {
    // this.cityList = data.cityList;
    this.govList = data.govList;
    // this.subDistrictList = data.subDistrictsList;
    // this.districtList = data.districtList;
    // this.landList = data.landList;
    // this.regionList = data.regionList;
  }

  ngOnInit() {
  }

  step2Next() {
    this.router.navigateByUrl('/step3');
  }

  setDefault() {
    this.cityList = this.data.cityList;
    this.govList = this.data.govList;
    this.subDistrictList = this.data.subDistrictsList;
    this.districtList = this.data.districtList;
    this.landList = this.data.landList;
    this.regionList = this.data.regionList;
    this.changeRef.detectChanges();
  }
  clearAll() {
    this.subDistrictList = [];
    this.regionList = [];
    this.cityList = [];
    this.districtList = [];
    this.landList = [];
  }

  fireGovSelection(event) {
    // this.setDefault();
    this.clearAll();
    const govName = event;
    this.cityList = this.data.cityList;
    const SameGovLsit = this.govList.filter(item => item.gov === govName);
    const govId = SameGovLsit[0].govId;

    const cities = this.cityList.filter(item => item.govId === govId);

    this.cityList = cities;
    this.changeRef.detectChanges();
    // if (this.cityList.length === 0) {
    //   this.cityList = [];
    //   this.cityListDisabled = true;
    //   this.regionList = [];
    //   this.regionListDisabled = true;
    //   this.districtList = [];
    //   this.districtListDisabled = true;
    //   this.subDistrictList = [];
    //   this.subDistrictListDisabled = true;
    //   this.landList = [];
    //   this.landListDisabled = true;
    // } else if (this.cityList.length === 1) {
    //   const returnedCityId = this.cityList[0].cityId;
    //   this.fireCitySelection(returnedCityId);
    //   this.changeRef.detectChanges();
    // } else {
    //   this.fireCitySelection(this.cityList[0].cityId);
    // }
  }

  fireCitySelection(event) {
    const cityName = event;

    this.regionList = this.data.regionList;
    const SameCityLsit = this.cityList.filter(item => item.city === cityName);

    const cityId = SameCityLsit[0].cityId;

    const regions = this.regionList.filter(item => item.cityId === cityId);
    this.regionList = regions;
    this.changeRef.detectChanges();
    // if (this.regionList.length === 0) {
    //   this.regionList = [];
    //   this.regionListDisabled = true;
    //   this.districtList = [];
    //   this.districtListDisabled = true;
    //   this.subDistrictList = [];
    //   this.subDistrictListDisabled = true;
    //   this.landList = [];
    //   this.landListDisabled = true;
    // } else if (this.regionList.length === 1) {
    //   const returnedRegionId = this.regionList[0].regionId;
    //   this.fireRegionSelection(returnedRegionId);
    //   this.changeRef.detectChanges();
    // } else {
    //   this.fireRegionSelection(this.regionList[0].regionId);
    // }
  }
  fireRegionSelection(event) {
    const regionName = event;
    this.districtList = this.data.districtList;
    console.log(regionName);

    const SameRegionLsit = this.regionList.filter(item => item.region === regionName);


    const regionId = SameRegionLsit[0].regionId;

    const districts = this.districtList.filter(item => item.regionId === regionId);
    this.districtList = districts;
    this.changeRef.detectChanges();
    // if (this.districtList.length === 0) {
    //   this.districtList = [];
    //   this.districtListDisabled = true;
    //   this.subDistrictList = [];
    //   this.subDistrictListDisabled = true;
    //   this.landList = [];
    //   this.landListDisabled = true;
    // } else if (this.districtList.length === 1) {
    //   const returnedDistrictId = this.districtList[0].districtId;
    //   this.fireDistrictSelection(returnedDistrictId);
    //   this.changeRef.detectChanges();
    // } else {
    //   this.fireDistrictSelection(this.districtList[0].districtId);
    // }
  }
  fireDistrictSelection(event) {
    const districtName = event;
    this.subDistrictList = this.data.subDistrictsList;
    const SameDistrictLsit = this.districtList.filter(item => item.district === districtName);


    const districtId = SameDistrictLsit[0].districtId;

    const subDistricts = this.subDistrictList.filter(item => item.districtId === districtId);
    this.subDistrictList = subDistricts;
    this.changeRef.detectChanges();
    // if (this.subDistrictList.length === 0) {
    //   this.subDistrictList = [];
    //   this.subDistrictListDisabled = true;
    //   this.landList = [];
    //   this.landListDisabled = true;
    // } else if (this.subDistrictList.length === 1) {
    //   const returnedSubDistrictId = this.subDistrictList[0].subDistrictId;
    //   this.fireSubDistrictSelection(returnedSubDistrictId);
    //   this.changeRef.detectChanges();
    // } else {
    //   this.fireSubDistrictSelection(this.subDistrictList[0].subDistrictId);
    // }
  }
  fireSubDistrictSelection(event) {
    const subDistrictName = event;
    this.landList = this.data.landList;
    const SameSubDistrictLsit = this.subDistrictList.filter(item => item.subDistrict === subDistrictName);



    const subDistrictId = SameSubDistrictLsit[0].subDistrictId;

    const lands = this.landList.filter(item => item.subDistrictId === subDistrictId);
    this.landList = lands;
    this.changeRef.detectChanges();
    // if (this.landList.length === 0) {
    //   this.landList = [];
    //   this.landListDisabled = true;
    // }
  }

}
