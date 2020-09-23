import { switchMap } from 'rxjs/operators';
import { TimeService } from './../time.service';
import { DataService, TableData } from './data.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
export interface TableLastName {
  name: string;
}
@Component({
  selector: 'app-second-step',
  templateUrl: './second-step.component.html',
  styleUrls: ['./second-step.component.css'],
})
export class SecondStepComponent implements OnInit {
  localStorageAlice = localStorage;
  public loading: boolean;
  public showLabels = false;
  public area: number;
  public excellence: number;
  public data: TableData[];
  public regionList: string[];
  public govList: string[];
  public areaList: string[];
  public excellenceList: string[];
  public landList: number[];
  public districtList: string[];
  public subDistrictList: string[];
  public cityList: string[];
  public selectedSlice: TableData;
  constructor(
    protected service: DataService,
    protected timeService: TimeService,
    protected cd: ChangeDetectorRef,
    public router: Router,
  ) {
    this.selectedSlice = {
      id: 0,
      gov: '',
      city: '',
      region: '',
      district: '',
      subdistrict: '',
      area: 0,
      excellence: 0,
      land: 0,
    };
    this.cityList = [];
    this.regionList = [];
    this.districtList = [];
    this.subDistrictList = [];
    this.landList = [];
  }

  ngOnInit() {
    this.loading = true;
    this.timeService
      .getLastTableName()
      .pipe(switchMap((name) => this.service.getAllData(name.name)))
      .subscribe((data) => {
        this.loading = false;
        this.createDataArrays(data);
      });
  }
  createDataArrays(data: TableData[]) {
    this.data = data;
    // trim all string data
    this.data.map((obj) => {
      Object.keys(obj).map(
        (k) => (obj[k] = typeof obj[k] === 'string' ? obj[k].trim() : obj[k])
      );
    });
    console.log(this.data);

    // this.regionList = this.data
    //   .map((newData) => newData.region)
    //   .filter((v, i, a) => a.indexOf(v) === i);
    this.govList = this.data
      .map((newData) => newData.gov)
      .filter((v, i, a) => a.indexOf(v) === i);
    // this.areaList = this.data
    //   .map((newData) => newData.area)
    //   .filter((v, i, a) => a.indexOf(v) === i);
    // this.excellenceList = this.data
    //   .map((newData) => newData.excellence)
    //   .filter((v, i, a) => a.indexOf(v) === i);
    // this.districtList = this.data
    //   .map((newData) => newData.district)
    //   .filter((v, i, a) => a.indexOf(v) === i);
    // this.subDistrictList = this.data
    //   .map((newData) => newData.subdistrict)
    //   .filter((v, i, a) => a.indexOf(v) === i);
    // this.landList = this.data
    //   .map((newData) => newData.land)
    //   .filter((v, i, a) => a.indexOf(v) === i);
    // this.cityList = this.data
    //   .map((newData) => newData.city)
    //   .filter((v, i, a) => a.indexOf(v) === i);
  }
  donothing() {}

  public govChanged(ev) {
    const selectedGov = ev.target.options[ev.target.options.selectedIndex].text;
    // Update selected slice
    this.selectedSlice.gov = selectedGov;
    this.clearArrays('gov');
    const citiesArrayOfGov = this.data.filter(
      (filteredArray) => filteredArray.gov === selectedGov
    );
    this.cityList = citiesArrayOfGov
      .map((newData) => newData.city)
      .filter((v, i, a) => a.indexOf(v) === i);
  }

  public cityChanged(ev) {
    const selectedCity =
      ev.target.options[ev.target.options.selectedIndex].text;
    // Update selected slice
    this.selectedSlice.city = selectedCity;
    this.clearArrays('city');
    const regionsArrayOfCity = this.data.filter(
      (filteredArray) => filteredArray.city === selectedCity
    );
    this.regionList = regionsArrayOfCity
      .map((newData) => newData.region)
      .filter((v, i, a) => a.indexOf(v) === i);
  }

  public regionChanged(ev) {
    const selectedRegion =
      ev.target.options[ev.target.options.selectedIndex].text;
    // Update selected slice
    this.selectedSlice.region = selectedRegion;
    this.clearArrays('region');
    const districtsArrayOfRegion = this.data.filter(
      (filteredArray) => filteredArray.region === selectedRegion
    );
    this.districtList = districtsArrayOfRegion
      .map((newData) => newData.district)
      .filter((v, i, a) => a.indexOf(v) === i);
  }

  public districtChanged(ev) {
    const selectedDistrict =
      ev.target.options[ev.target.options.selectedIndex].text;
    // Update selected slice
    this.selectedSlice.district = selectedDistrict;
    this.clearArrays('district');
    const subDistrictsArrayOfDistrict = this.data.filter(
      (filteredArray) => filteredArray.district === selectedDistrict
    );
    this.subDistrictList = subDistrictsArrayOfDistrict
      .map((newData) => newData.subdistrict)
      .filter((v, i, a) => a.indexOf(v) === i);
  }

  public subDistrictChanged(ev) {
    const selectedSubDistrict =
      ev.target.options[ev.target.options.selectedIndex].text;
    // Update selected slice
    this.selectedSlice.subdistrict = selectedSubDistrict;
    this.clearArrays('subDistrict');
    const landsArrayOfSubDistrict = this.data.filter(
      (filteredArray) => filteredArray.subdistrict === selectedSubDistrict
    );
    this.landList = landsArrayOfSubDistrict
      .map((newData) => newData.land)
      .filter((v, i, a) => a.indexOf(v) === i);
  }

  public landChanged(ev) {
    const selectedLand = ev.target.options[ev.target.options.selectedIndex]
      .text as number;
    // Update selected slice
    this.selectedSlice.land = selectedLand;
    this.getInfo();
  }

  public getInfo() {
    const theSelectedTaleRow = this.data.find(
      (data) =>
      // tslint:disable-next-line: triple-equals
        data.city == this.selectedSlice.city &&
        // tslint:disable-next-line: triple-equals
        data.region == this.selectedSlice.region &&
        // tslint:disable-next-line: triple-equals
        data.district == this.selectedSlice.district &&
        // tslint:disable-next-line: triple-equals
        data.subdistrict == this.selectedSlice.subdistrict &&
        // tslint:disable-next-line: triple-equals
        data.land == this.selectedSlice.land
    );
    this.excellence = theSelectedTaleRow.excellence;
    this.area = theSelectedTaleRow.area;
    this.showLabels = true;
    this.cd.markForCheck();
  }

  public clearArrays(name: string) {
    switch (name) {
      case 'gov':
        this.cityList.length = 0;
        this.selectedSlice.city = '';
        this.regionList.length = 0;
        this.selectedSlice.region = '';
        this.districtList.length = 0;
        this.selectedSlice.district = '';
        this.subDistrictList.length = 0;
        this.selectedSlice.subdistrict = '';
        this.landList.length = 0;
        this.selectedSlice.land = 0;
        break;
      case 'city':
        this.regionList.length = 0;
        this.selectedSlice.region = '';
        this.districtList.length = 0;
        this.selectedSlice.district = '';
        this.subDistrictList.length = 0;
        this.selectedSlice.subdistrict = '';
        this.landList.length = 0;
        this.selectedSlice.land = 0;
        break;
      case 'region':
        this.districtList.length = 0;
        this.selectedSlice.district = '';
        this.subDistrictList.length = 0;
        this.selectedSlice.subdistrict = '';
        this.landList.length = 0;
        this.selectedSlice.land = 0;
        break;
      case 'district':
        this.subDistrictList.length = 0;
        this.selectedSlice.subdistrict = '';
        this.landList.length = 0;
        this.selectedSlice.land = 0;
        break;
      case 'subDistrict':
        this.landList.length = 0;
        this.selectedSlice.land = 0;
        break;
    }
  }
  step2Next() {
    this.router.navigateByUrl(`/step3/${localStorage.getItem('chosenLand')}`);
  }
  step2back() {
    this.router.navigateByUrl(`/step1/${localStorage.getItem('chosenLand')}`);
  }
}
