import { TableLastName } from './second-step/second-step.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
export interface TimerData {
  time: string;
  active: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TimeService {
  public timeAPIURL = 'http://worldtimeapi.org/api/timezone/Africa/Cairo';
  constructor(
    protected http: HttpClient,
    protected firestore: AngularFirestore
  ) {}

  public getCurrrentTime() {
    return this.http.get('http://worldtimeapi.org/api/timezone/Africa/Cairo');
  }

  public getTime() {
    return this.firestore.collection('timer').doc('WggeXAB35CvUEDNv8RTR').valueChanges().pipe(first());
    // return this.firestore.collection('timer').doc('WggeXAB35CvUEDNv8RTR').get();
  }

  public getLastTableName(): Observable<TableLastName> {
    return this.firestore.collection('last_table_name').doc<TableLastName>('lqWbEuCBH59hc6xHDzV2').valueChanges().pipe(first());
  }

  public setDate(date: string) {
    this.firestore.collection('timer').doc('WggeXAB35CvUEDNv8RTR').update({ date: date });
  }
  public setActive(activate: boolean) {
    this.firestore.collection('timer').doc('WggeXAB35CvUEDNv8RTR').update({ active: activate });
  }

}
