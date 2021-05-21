import { DataService } from "./../step2/data.service";
import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import * as XLSX from "xlsx";
import "babel-polyfill";
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: "app-uploader",
  templateUrl: "./uploader.component.html",
  styleUrls: ["./uploader.component.css"],
})
export class UploaderComponent implements OnInit {
  public current = new Date();
  public dateTimeStamp: string;
  public loading = false;
  constructor(
    protected data: DataService,
    protected firestore: AngularFirestore,
    protected cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    console.log(this.current.toISOString().substring(0, 19));
    this.dateTimeStamp = this.current.toISOString().substring(0, 19);
  }
  onFileChange(event: any) {
    this.loading = true;

    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>event.target;
    if (target.files.length !== 1) {
      alert("Cannot use multiple files");
      window.location.reload();
      throw new Error("Cannot use multiple files");
    }
    const reader: FileReader = new FileReader();
    reader.readAsBinaryString(target.files[0]);
    reader.onload = (e: any) => {
      /* create workbook */
      const binarystr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(binarystr, { type: "binary" });

      /* selected the first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      const data = XLSX.utils.sheet_to_json(ws); // to get 2d array pass 2nd parameter as object {header: 1}
      console.log(data);
      // create a new table with the uploaded data with time stamp
      data.map((tableRow) => {
        // map every value of the object to be trimmed and make it string if it's number on the goo.
        Object.keys(tableRow).map(
          (k) =>
            (tableRow[k] =
              typeof tableRow[k] == "string"
                ? tableRow[k].trim()
                : tableRow[k].toString().trim())
        );
        console.log(tableRow);
        return this.firestore
          .collection(`table-${this.dateTimeStamp}`)
          .add(tableRow);
      });
      // Update the last table name
      this.firestore
        .collection("last_table_name")
        .doc("lqWbEuCBH59hc6xHDzV2")
        .update({ name: "table-" + this.dateTimeStamp })
        .then(() => {
          this.loading = false;
          this.cdr.markForCheck();
          console.log("Document successfully written!");
        })
        .catch((error) => {
          // The document probably doesn't exist.
          alert("Something wrong happened");
          window.location.reload();
        });

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
