import { UsersAuthService } from "./../users-auth.service";
import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { switchMap, tap, debounceTime, map, first } from "rxjs/operators";
import { Observable } from "rxjs";
import { TimeService } from "../time.service";
import * as moment from "moment";

@Component({
  selector: "app-reserve",
  templateUrl: "./reserve.component.html",
  styleUrls: ["./reserve.component.css"],
})
export class ReserveComponent implements OnInit {
  public landId: number;
  public timer: any;
  public showBtn = false;
  public timerDate: Date;
  public currentDate = new Date();
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
    this.timeService
      .getTime()
      .pipe(first())
      .subscribe((timer: any) => {
        this.timer = timer;
        this.timerDate = new Date(this.timer.date);
        console.log("timerDate :" + this.timerDate);
        console.log("currentDate :" + this.currentDate);
        const mometOfCurrentDate = moment(this.currentDate);
        const mometOfTimerDate = moment(this.timerDate);
        console.log("timerDate :" + mometOfTimerDate);
        console.log("currentDate :" + mometOfCurrentDate);

        if (!timer.forceHide) {
          if (mometOfCurrentDate.isAfter(mometOfTimerDate)) {
            this.showBtn = this.timer.active;
            console.log("timerDate is before current date");
          } else {
            console.log("timerDate is after current date");
          }
        } else {
          this.showBtn = false;
        }
      });
    this.land = this.route.params.pipe(
      debounceTime(300),
      switchMap((params) =>
        this.auth.lands.filter((land) => land.id === +params["id"])
      )
    );
  }
}
