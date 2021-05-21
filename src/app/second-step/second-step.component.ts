import { switchMap } from "rxjs/operators";
import { TimeService } from "./../time.service";
import { DataService, TableData } from "./data.service";
import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
export interface TableLastName {
  name: string;
}
@Component({
  selector: "app-second-step",
  templateUrl: "./second-step.component.html",
  styleUrls: ["./second-step.component.css"],
})
export class SecondStepComponent implements OnInit {
  localStorageAlice = localStorage;
  public loading: boolean;
  public showLabels = false;
  public area: string;
  public excellence: string;
  public data: TableData[];
  public regionList: string[];
  public govList: string[];
  public areaList: string[];
  public excellenceList: string[];
  public landList: string[];
  public districtList: string[];
  public subDistrictList: string[];
  public cityList: string[];
  public selectedSlice: TableData;
  constructor(
    protected service: DataService,
    protected timeService: TimeService,
    protected cd: ChangeDetectorRef,
    public router: Router
  ) {
    this.selectedSlice = {
      id: "",
      gov: "",
      city: "",
      region: "",
      district: "",
      subdistrict: "",
      area: "",
      excellence: "",
      land: "",
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
    console.log(data);

    this.data = data;
    // trim all string data
    // this.data.map((obj) => {
    //   Object.keys(obj).map(
    //     (k) => (obj[k] = typeof obj[k] === 'string' ? obj[k].trim() : obj[k])
    //   );
    // });
    console.log(this.data);
    this.govList = this.data
      .map((newData) => newData.gov)
      .filter((v, i, a) => a.indexOf(v) === i);
  }

  public govChanged(selectedGov: string) {
    // Update selected slice
    this.selectedSlice.gov = selectedGov;
    this.clearArrays("gov");
    const citiesArrayOfGov = this.data.filter(
      (dataRow) => dataRow.gov === selectedGov
    );
    this.cityList = citiesArrayOfGov
      .map((newData) => newData.city)
      .filter((v, i, a) => a.indexOf(v) === i);
  }

  public cityChanged(selectedCity: string) {
    // Update selected slice
    this.selectedSlice.city = selectedCity;
    this.clearArrays("city");
    const regionsArrayOfCity = this.data.filter(
      (dataRow) =>
        dataRow.city == selectedCity && dataRow.gov == this.selectedSlice.gov
    );
    this.regionList = regionsArrayOfCity
      .map((newData) => newData.region)
      .filter((v, i, a) => a.indexOf(v) === i);
  }

  public regionChanged(selectedRegion: string) {
    // Update selected slice
    this.selectedSlice.region = selectedRegion;
    this.clearArrays("region");
    const districtsArrayOfRegion = this.data.filter(
      (dataRow) =>
        dataRow.region == selectedRegion &&
        dataRow.city == this.selectedSlice.city &&
        dataRow.gov == this.selectedSlice.gov
    );
    this.districtList = districtsArrayOfRegion
      .map((newData) => newData.district)
      .filter((v, i, a) => a.indexOf(v) === i);
  }

  public districtChanged(selectedDistrict: string) {
    // Update selected slice
    this.selectedSlice.district = selectedDistrict;
    this.clearArrays("district");
    const subDistrictsArrayOfDistrict = this.data.filter(
      (dataRow) =>
        dataRow.district == selectedDistrict &&
        dataRow.region == this.selectedSlice.region &&
        dataRow.city == this.selectedSlice.city &&
        dataRow.gov == this.selectedSlice.gov
    );
    this.subDistrictList = subDistrictsArrayOfDistrict
      .map((newData) => newData.subdistrict)
      .filter((v, i, a) => a.indexOf(v) === i);
  }

  public subDistrictChanged(selectedSubDistrict: string) {
    // Update selected slice
    this.selectedSlice.subdistrict = selectedSubDistrict;
    this.clearArrays("subDistrict");

    const landsArrayOfSubDistrict = this.data.filter(
      (dataRow) =>
        dataRow.subdistrict == selectedSubDistrict &&
        dataRow.district == this.selectedSlice.district &&
        dataRow.region == this.selectedSlice.region &&
        dataRow.city == this.selectedSlice.city &&
        dataRow.gov == this.selectedSlice.gov
    );

    this.landList = landsArrayOfSubDistrict
      .map((newData) => newData.land)
      .filter((v, i, a) => a.indexOf(v) === i);
    this.landList = this.landList.sort((a, b) => +a - +b);
  }

  public landChanged(selectedLand: string) {
    // Update selected slice
    this.selectedSlice.land = selectedLand;
    this.getInfo();
    // this.getAltInfo();
  }

  public getAltInfo() {
    const theSelectedTableRow = this.data.filter(
      (dataRow) =>
        dataRow.land == this.selectedSlice.land &&
        dataRow.subdistrict === this.selectedSlice.subdistrict &&
        dataRow.district === this.selectedSlice.district &&
        dataRow.region === this.selectedSlice.region &&
        dataRow.city == this.selectedSlice.city &&
        dataRow.gov == this.selectedSlice.gov
    );

    if (theSelectedTableRow.length > 0) {
      // this.excellence = theSelectedTableRow.excellence;
      // this.area = theSelectedTableRow.area;
      this.showLabels = true;
      this.cd.markForCheck();
    } else {
      console.log(this.selectedSlice);

      alert("something went wrong");
      window.location.reload();
    }
  }
  public getInfo() {
    const theSelectedTableRow = this.data.find(
      (data) =>
        data.gov == this.selectedSlice.gov &&
        data.city == this.selectedSlice.city &&
        data.region == this.selectedSlice.region &&
        data.district == this.selectedSlice.district &&
        data.subdistrict == this.selectedSlice.subdistrict &&
        data.land == this.selectedSlice.land
    );
    if (theSelectedTableRow) {
      this.excellence = theSelectedTableRow.excellence;
      this.area = theSelectedTableRow.area;
      this.showLabels = true;
      this.cd.markForCheck();
    } else {
      console.log(this.selectedSlice);

      alert("something went wrong");
      window.location.reload();
    }
  }

  public clearArrays(name: string) {
    switch (name) {
      case "gov":
        this.cityList.length = 0;
        this.selectedSlice.city = "";
        this.regionList.length = 0;
        this.selectedSlice.region = "";
        this.districtList.length = 0;
        this.selectedSlice.district = "";
        this.subDistrictList.length = 0;
        this.selectedSlice.subdistrict = "";
        this.landList.length = 0;
        this.selectedSlice.land = "";
        break;
      case "city":
        this.regionList.length = 0;
        this.selectedSlice.region = "";
        this.districtList.length = 0;
        this.selectedSlice.district = "";
        this.subDistrictList.length = 0;
        this.selectedSlice.subdistrict = "";
        this.landList.length = 0;
        this.selectedSlice.land = "";
        break;
      case "region":
        this.districtList.length = 0;
        this.selectedSlice.district = "";
        this.subDistrictList.length = 0;
        this.selectedSlice.subdistrict = "";
        this.landList.length = 0;
        this.selectedSlice.land = "";
        break;
      case "district":
        this.subDistrictList.length = 0;
        this.selectedSlice.subdistrict = "";
        this.landList.length = 0;
        this.selectedSlice.land = "";
        break;
      case "subDistrict":
        this.landList.length = 0;
        this.selectedSlice.land = "";
        break;
    }
  }
  step2Next() {
    this.router.navigateByUrl(`/step3/${localStorage.getItem("chosenLand")}`);
  }
  step2back() {
    this.router.navigateByUrl(`/step1/${localStorage.getItem("chosenLand")}`);
  }
}
