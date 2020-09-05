import { CurrentTime, TimerData } from './../time.service';
import { UsersAuthService } from './../users-auth.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap, debounceTime, map, first } from 'rxjs/operators';
import { Observable, combineLatest, of } from 'rxjs';
import { TimeService } from '../time.service';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css'],
})
export class ReserveComponent implements OnInit {
  public landId: number;
  public timer;
  public isActive = of(false);
  public localTime;
  // public land: Observable<any>;
  public land;
  localStorageAlice = localStorage;
  constructor(
    private route: ActivatedRoute,
    protected auth: UsersAuthService,
    protected cd: ChangeDetectorRef,
    protected timeService: TimeService
  ) {}

  ngOnInit() {
    this.timeService.getCurrentTime().subscribe((dateTime) => {
      console.log(dateTime);
      this.localTime = this.mapCurrentTime(dateTime);
    });

    this.timeService.getTime().subscribe((timer) => {
      this.timer = timer;
    });

    this.isActive = combineLatest(
      this.timeService.getCurrentTime(),
      this.timeService.getTime()
    ).pipe(
      first(),
      map(([currentTime, time]) => {
        this.localTime = this.mapCurrentTime(currentTime);
        if (this.localTime === time.date_time) {
          return time.active;
        } else {
          return !time.active;
        }
      })
    );
    this.land = this.route.params.pipe(
      debounceTime(300),
      switchMap((params) =>
        this.auth.lands.filter((land) => land.id === +params['id'])
      )
    );
  }

  public mapCurrentTime(currentTime): string {
    const timearr = currentTime.split('');
    const timearrs = timearr.splice(0, 16);
    return timearrs.join('');
  }
}
