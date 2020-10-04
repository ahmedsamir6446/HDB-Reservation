import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  active: boolean;
  constructor(protected fb: FormBuilder, public timeService: TimeService) {
    this.timerForm = this.fb.group({
      date: ['', Validators.required],
      time: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.timeService.getTime().subscribe((time) => {
      this.timer = time;
      this.active = this.timer.active;
    });
  }
  setActive(checked) {
    this.active = checked;
  }
  onsubmit() {
    if (this.timerForm.invalid) {
      alert('pls enter date, time');
      return;
    } else {
      const time: string = this.timerForm.get('time').value;
      const date: Date = this.timerForm.get('date').value;
      date.setMinutes(+time.substr(3, 2));
      date.setHours(+time.substr(0, 2));
      this.timeService.setActive(this.active);
      this.timeService.setDate(date.toString());
      alert('Saved');
    }
  }
}
