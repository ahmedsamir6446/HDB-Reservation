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
  area;
  excellence;
  plsChoose = 'برجاءالاختيار';
  govNameTrimmed;
  cityNameTrimmed;
  regionNameTrimmed;
  districtNameTrimmed;
  subDistrictNameTrimmed;
  landNo;
  showResults = false;

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
  clearState(state: string) {
    if (state === 'gov') {
      this.subDistrictList = [];
      this.regionList = [];
      this.cityList = [];
      this.districtList = [];
      this.landList = [];
    } else if (state === 'city') {
      this.subDistrictList = [];
      this.regionList = [];
      this.districtList = [];
      this.landList = [];
    } else if (state === 'region') {
      this.subDistrictList = [];
      this.districtList = [];
      this.landList = [];
    } else if (state === 'district') {
      this.subDistrictList = [];
      this.landList = [];
    } else if (state === 'subDistrict') {
      this.landList = [];
    }

  }
  removeSpaces(item: string) {
    item = item.replace(' ', '');
  }
  fireGovSelection(event) {
    this.clearState('gov');
    const govName = event.target.options[event.target.options.selectedIndex].text;
    const govNameTrimmed = govName.replace(/\s/g, '');
    if (govNameTrimmed === this.plsChoose) {
      return;
    }
    this.govNameTrimmed = govNameTrimmed;
    this.cityList = this.data.cityList;
    const SameGovLsit = this.govList.filter(item => item.gov === govName);
    const govId = SameGovLsit[0].govId;
    const cities = this.cityList.filter(item => item.govId === govId);
    this.cityList = cities;
    this.changeRef.detectChanges();
  }

  fireCitySelection(event) {
    this.clearState('city');
    const cityName = event.target.options[event.target.options.selectedIndex].text;
    const cityNameTrimmed = cityName.replace(/\s/g, '');
    if (cityNameTrimmed === this.plsChoose) {
      return;
    }
    this.cityNameTrimmed = cityNameTrimmed;
    this.regionList = this.data.regionList;
    const SameCityLsit = this.cityList.filter(item => item.city === cityName);
    const cityId = SameCityLsit[0].cityId;
    const regions = this.regionList.filter(item => item.cityId === cityId);
    this.regionList = regions;
    this.changeRef.detectChanges();
  }
  fireRegionSelection(event) {
    this.clearState('region');
    const regionName = event.target.options[event.target.options.selectedIndex].text;
    const regionNameTrimmed = regionName.replace(/\s/g, '');
    if (regionNameTrimmed === this.plsChoose) {
      return;
    }
    this.regionNameTrimmed = regionNameTrimmed;
    this.districtList = this.data.districtList;
    const SameRegionLsit = this.regionList.filter(item => item.region === regionName);
    const regionId = SameRegionLsit[0].regionId;
    const districts = this.districtList.filter(item => item.regionId === regionId);
    this.districtList = districts;
    this.changeRef.detectChanges();
  }
  fireDistrictSelection(event) {
    this.clearState('district');
    const districtName = event.target.options[event.target.options.selectedIndex].text;
    const districtNameTrimmed = districtName.replace(/\s/g, '');
    if (districtNameTrimmed === this.plsChoose) {
      return;
    }
    this.districtNameTrimmed = districtNameTrimmed;
    this.subDistrictList = this.data.subDistrictsList;
    const SameDistrictLsit = this.districtList.filter(item => item.district === districtName);
    const districtId = SameDistrictLsit[0].districtId;
    const subDistricts = this.subDistrictList.filter(item => item.districtId === districtId);
    this.subDistrictList = subDistricts;
    this.changeRef.detectChanges();
  }
  fireSubDistrictSelection(event) {
    this.clearState('subDistrict');
    const subDistrictName = event.target.options[event.target.options.selectedIndex].text;
    const subDistrictNameTrimmed = subDistrictName.replace(/\s/g, '');
    if (subDistrictNameTrimmed === this.plsChoose) {
      return;
    }
    this.subDistrictNameTrimmed = subDistrictNameTrimmed;
    this.landList = this.data.landList;
    const SameSubDistrictLsit = this.subDistrictList.filter(item => item.subDistrict === subDistrictName);
    const subDistrictId = SameSubDistrictLsit[0].subDistrictId;
    const lands = this.landList.filter(item => item.subDistrictId === subDistrictId);
    this.landList = lands;
    this.changeRef.detectChanges();
  }
  fireLandSelection(event) {
    const landNo = event.target.options[event.target.options.selectedIndex].text;
    const landNoTrimmed = landNo.replace(/\s/g, '');
    if (landNoTrimmed === this.plsChoose) {
      return;
    }
    this.landNo = landNo;
    this.showLandDetails();
    this.changeRef.detectChanges();
  }
  showLandDetails() {
    if (this.landNo && this.subDistrictNameTrimmed) {
      // tslint:disable-next-line:max-line-length
      const filteredTable = this.data.allTable.filter(item => item.land === this.landNo && item.subDistrict === this.subDistrictNameTrimmed);
      this.area = filteredTable[0].area;
      this.excellence = filteredTable[0].excellence;
      this.showResults = true;
      console.log(filteredTable);
    } else {
      alert('please take screenshot and send to me then refresh and start over');
    }
    this.changeRef.detectChanges();
  }

}
