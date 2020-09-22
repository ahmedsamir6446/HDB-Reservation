import { DataService } from './../step2/data.service';
import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import 'babel-polyfill';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css'],
})
export class UploaderComponent implements OnInit {
  constructor(
    protected data: DataService,
    protected firestore: AngularFirestore
  ) {}

  ngOnInit() {}
  onFileChange(event: any) {
    console.log(event);

    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>event.target;
    if (target.files.length !== 1) {
      throw new Error('Cannot use multiple files');
    }
    const reader: FileReader = new FileReader();
    reader.readAsBinaryString(target.files[0]);
    reader.onload = (e: any) => {
      /* create workbook */
      const binarystr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(binarystr, { type: 'binary' });

      /* selected the first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      const data = XLSX.utils.sheet_to_json(ws); // to get 2d array pass 2nd parameter as object {header: 1}
      console.log(data);
      data.map((tableRow) => this.firestore.collection('table').add(tableRow));
      // this.firestore.collection('table').add(data);

      // this.data.data = data;
      const updatedData = data.forEach((value) => {
        Object.keys(value).forEach((key) => {
          // console.log(key);
        });
      });
      // console.log(updatedData);
    };
  }
}
