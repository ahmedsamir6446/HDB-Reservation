import { DataService } from './data.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService0 } from './data0.service';
import { DataService1 } from './data1.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { debounceTime, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css'],
  providers: [DataService],
})
export class Step2Component implements OnInit {
  govList;
  types;
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
  cantGo = true;
  localStorageAlice = localStorage;
  data;
  selectedRow = {
    land: '',
    subDistrict: '',
    district: '',
    region: '',
    city: '',
    gov: '',
    area: '',
    excellence: '',
  };

  constructor(
    public router: Router,
    protected changeRef: ChangeDetectorRef,
    protected usedData0: DataService0,
    protected usedData1: DataService1,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.pipe(debounceTime(300)).subscribe((params) => {
      this.data = +params['id'] === 0 ? this.usedData0 : this.usedData1;
      this.govList = this.data.govList;
    });
  }

  step2Next() {
    this.router.navigateByUrl(`/step3/${localStorage.getItem('chosenLand')}`);
  }
  step2back() {
    this.router.navigateByUrl(`/step1/${localStorage.getItem('chosenLand')}`);
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
    this.showResults = false;
    this.cantGo = true;
  }
  removeSpaces(item: string) {
    item = item.replace(' ', '');
  }
  public fireGovSelection(event) {
    this.clearState('gov');

    this.selectedRow.gov =
      event.target.options[event.target.options.selectedIndex].text;
    localStorage.removeItem('selectedRow');
    localStorage.setItem('selectedRow', JSON.stringify(this.selectedRow));

    this.cityList = this.data.cityList;
    this.cityList = this.cityList.filter(
      (city) =>
        city.govId ===
        this.govList.find((gov) => gov.value === event.target.value).govId
    );
    this.changeRef.detectChanges();
  }

  fireCitySelection(event) {
    this.clearState('city');

    this.selectedRow.city =
      event.target.options[event.target.options.selectedIndex].text;
    localStorage.removeItem('selectedRow');
    localStorage.setItem('selectedRow', JSON.stringify(this.selectedRow));

    this.regionList = this.data.regionList;
    this.regionList = this.regionList.filter(
      (region) =>
        region.cityId ===
        this.cityList.find((city) => city.value === event.target.value).cityId
    );
    this.changeRef.detectChanges();
  }
  fireRegionSelection(event) {
    this.clearState('region');

    this.selectedRow.region =
      event.target.options[event.target.options.selectedIndex].text;
    localStorage.removeItem('selectedRow');
    localStorage.setItem('selectedRow', JSON.stringify(this.selectedRow));

    this.districtList = this.data.districtList;
    this.districtList = this.districtList.filter(
      (district) =>
        district.regionId ===
        this.regionList.find((region) => region.value === event.target.value)
          .regionId
    );
    this.changeRef.detectChanges();
  }
  fireDistrictSelection(event) {
    this.clearState('district');

    this.selectedRow.district =
      event.target.options[event.target.options.selectedIndex].text;
    localStorage.removeItem('selectedRow');
    localStorage.setItem('selectedRow', JSON.stringify(this.selectedRow));

    this.subDistrictList = this.data.subDistrictsList;
    this.subDistrictList = this.subDistrictList.filter(
      (subDistrict) =>
        subDistrict.districtId ===
        this.districtList.find(
          (district) => district.value === event.target.value
        ).districtId
    );
    this.changeRef.detectChanges();
  }
  fireSubDistrictSelection(event) {
    this.clearState('subDistrict');

    this.selectedRow.subDistrict =
      event.target.options[event.target.options.selectedIndex].text;
    localStorage.removeItem('selectedRow');
    localStorage.setItem('selectedRow', JSON.stringify(this.selectedRow));

    this.landList = this.data.landList;
    this.landList = this.landList.filter(
      (land) =>
        land.subDistrictId ===
        this.subDistrictList.find(
          (subDistrict) => subDistrict.value === event.target.value
        ).subDistrictId
    );
    this.changeRef.detectChanges();
  }

  fireLandSelection(event) {
    this.area = '';
    this.excellence = '';
    this.selectedRow.land =
      event.target.options[event.target.options.selectedIndex].text;
    localStorage.removeItem('selectedRow');
    localStorage.setItem('selectedRow', JSON.stringify(this.selectedRow));

    this.showLandDetails();
    this.changeRef.detectChanges();
  }
  showLandDetails() {
    if (
      this.selectedRow.city &&
      this.selectedRow.district &&
      this.selectedRow.land &&
      this.selectedRow.subDistrict &&
      this.selectedRow.land
    ) {
      const selectedTableItem = this.data.allTable.find(
        (item) =>
          item.city === this.selectedRow.city &&
          item.district === this.selectedRow.district &&
          item.land === this.selectedRow.land
      );

      if (selectedTableItem) {
        console.log('كله تمام يا حاج خالد');
      } else {
        console.log('عندك مشكله و شوفو شغلكم صح بقي');
        console.log(this.selectedRow);
        console.log('اعمل ريفريش بقي');
      }
      console.log(selectedTableItem);

      this.area = selectedTableItem.area;
      this.excellence = selectedTableItem.excellence;
      this.selectedRow.area = this.area;
      this.selectedRow.excellence = this.excellence;
      localStorage.removeItem('selectedRow');
      localStorage.setItem('selectedRow', JSON.stringify(this.selectedRow));
      this.showResults = true;
      this.cantGo = false;
    } else {
      alert(
        'please take screenshot and send to me then refresh and start over ya 5aled beeeh :)'
      );
    }
    this.changeRef.detectChanges();
  }
}
