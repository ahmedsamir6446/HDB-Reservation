import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { TimeService } from '../time.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-set-timer',
  templateUrl: './set-timer.component.html',
  styleUrls: ['./set-timer.component.scss'],
})
export class SetTimerComponent implements OnInit {
  public timerForm: FormGroup;
  timer: any;
  constructor(protected fb: FormBuilder, public timeService: TimeService) {
    this.timerForm = this.fb.group({
      date: [''],
      time: [''],
    });
  }

  ngOnInit() {
    // this.timeService.setTimer('dfgdgdfd');
    // this.timeService.setActive(false);
    this.timeService.getTime().subscribe((time) => {
      this.timer = time;
    });
    // this.timer = this.timeService.getTime();
  }
  public change(ev) {
    console.log(ev);

    this.timeService.setActive(ev.active);
  }
  onsubmit() {
    console.log(this.timerForm.value);
  }
}
