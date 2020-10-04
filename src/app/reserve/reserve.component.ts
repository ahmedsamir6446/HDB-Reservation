import { UsersAuthService } from "./../users-auth.service";
import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { switchMap, tap, debounceTime, map } from "rxjs/operators";
import { Observable } from "rxjs";
import { TimeService } from "../time.service";

@Component({
  selector: "app-reserve",
  templateUrl: "./reserve.component.html",
  styleUrls: ["./reserve.component.css"],
})
export class ReserveComponent implements OnInit {
  public landId: number;
  public timer: any;
  public showBtn = false;
  public date: Date;
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
    this.timeService.getTime().subscribe((timer: any) => {
      this.timer = timer;
      this.date = new Date(this.timer.date);
      if (this.date.getTime() <= this.currentDate.getTime()) {
        this.showBtn = this.timer.active;
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
