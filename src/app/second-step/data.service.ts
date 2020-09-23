import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
export interface TableData {
  id: number;
  land: number;
  region: string;
  area: number;
  city: string;
  district: string;
  excellence: number;
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
