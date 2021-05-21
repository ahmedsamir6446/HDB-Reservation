import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
export interface TableData {
  id: string;
  land: string;
  region: string;
  area: string;
  city: string;
  district: string;
  excellence: string;
  gov: string;
  subdistrict: string;
}
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(protected firestore: AngularFirestore) {
  }
  public getAllData(tableName: string): Observable<TableData[]> {
    return this.firestore.collection<TableData>(`${tableName}`).valueChanges();
  }
}
