import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
export interface TimerData {
  time: string;
  apply: boolean;
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
    return this.firestore.collection('timer').doc('WggeXAB35CvUEDNv8RTR').valueChanges();
    // return this.firestore.collection('timer').doc('WggeXAB35CvUEDNv8RTR').get();
  }

  public setTimer(timer: string) {
    this.firestore.collection('timer').doc('WggeXAB35CvUEDNv8RTR').update({ time: timer });
  }
  public setActive(activate: boolean) {
    this.firestore.collection('timer').doc('WggeXAB35CvUEDNv8RTR').update({ active: activate });
  }

}
