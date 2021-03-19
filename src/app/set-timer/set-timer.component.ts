import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { TimeService } from "../time.service";
import { map } from "rxjs/operators";
import { of } from "rxjs";
import * as moment from "moment";

@Component({
  selector: "app-set-timer",
  templateUrl: "./set-timer.component.html",
  styleUrls: ["./set-timer.component.scss"],
})
export class SetTimerComponent implements OnInit {
  public timerForm: FormGroup;
  timer: any;
  date: Date;
  current_status: boolean;
  active: boolean;
  showBtn: boolean;
  displayDate: any;
  public currentDate: any;
  constructor(
    protected fb: FormBuilder,
    public timeService: TimeService,
    protected cd: ChangeDetectorRef
  ) {
    this.timerForm = this.fb.group({
      date: ["", Validators.required],
      time: ["", Validators.required],
    });
  }

  ngOnInit() {
    setInterval(() => {
      this.currentDate = of(new Date());
    }, 1000);
    // this.currentDate = of(new Date());
    this.timeService.getTime().subscribe((time) => {
      this.timer = time;
      this.active = this.timer.active;
      if (this.timer.active) {
        this.displayDate = new Date(this.timer.date);

        const mometOfCurrentDate = moment(new Date());
        const mometOfTimerDate = moment(new Date(this.timer.date));

        this.showBtn = mometOfCurrentDate.isAfter(mometOfTimerDate)
          ? true
          : false;
      } else {
        this.showBtn = false;
        this.displayDate = 'false';
      }
      this.cd.markForCheck();
    });
  }
  public forceHide() {
    this.timeService.setActive(false);
    this.timeService.setDate("");
    // this.timeService.setForceClose(true);
    alert("Btn is hidden, last saved date and time are cancelled");
  }
  onsubmit() {
    if (this.timerForm.invalid) {
      alert("pls enter date, time");
      return;
    } else {
      const time: string = this.timerForm.get("time").value;
      const date: Date = this.timerForm.get("date").value;
      date.setMinutes(+time.substr(3, 2));
      date.setHours(+time.substr(0, 2));
      this.timeService.setActive(true);
      this.timeService.setDate(date.toString());
      // this.timeService.setForceClose(false);
      alert("Saved");
      this.timerForm.reset();
    }
  }
}
