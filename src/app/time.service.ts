
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
export interface TimerData {
  date_time: string;
  active: boolean;
}
export interface CurrentTime {
  abbreviation: string;
  client_ip: string;
  datetime: string;
  day_of_week: number;
  day_of_year: number;
  dst: boolean;
  dst_from: number;
  dst_offset: number;
  dst_until: number;
  raw_offset: number;
  timezone: string;
  unixtime: number;
  utc_datetime: string;
  utc_offset: string;
  week_number: number;
  // abbreviation: "EET";
  // client_ip: "196.53.0.214";
  // datetime: "2020-09-05T05:57:33.589764+02:00";
  // day_of_week: 6;
  // day_of_year: 249;
  // dst: false;
  // dst_from: null;
  // dst_offset: 0;
  // dst_until: null;
  // raw_offset: 7200;
  // timezone: "Africa/Cairo";
  // unixtime: 1599278253;
  // utc_datetime: "2020-09-05T03:57:33.589764+00:00";
  // utc_offset: "+02:00";
  // week_number: 36;
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

  public getCurrentTime(): Observable<string> {
    return this.http
      .get<CurrentTime>('http://worldtimeapi.org/api/timezone/Africa/Cairo')
      .pipe(map((time) => time.datetime));
  }

  public getTime(): Observable<TimerData> {
    return this.firestore
      .collection('timer')
      .doc('WggeXAB35CvUEDNv8RTR')
      .valueChanges()
      .pipe(
      map((timer: TimerData) => {
        const t: TimerData = {
          active : timer.active,
          date_time : timer.date_time
        };
        return t;
      }));
    // return this.firestore.collection('timer').doc('WggeXAB35CvUEDNv8RTR').get();
  }

  public setDateTime(dateTime) {
    this.firestore
      .collection('timer')
      .doc('WggeXAB35CvUEDNv8RTR')
      .update({ date_time: dateTime });
  }
  public setActive(activate: boolean) {
    this.firestore
      .collection('timer')
      .doc('WggeXAB35CvUEDNv8RTR')
      .update({ active: activate });
  }
}
