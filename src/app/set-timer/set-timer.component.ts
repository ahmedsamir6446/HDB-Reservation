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
  myDate = new Date();
  constructor(protected fb: FormBuilder, public timeService: TimeService) {
    this.timerForm = this.fb.group({
      date: ['', Validators.required],
      time: ['', Validators.required],
    });
  }

  ngOnInit() {
    // console.log(this.myDate);
    // console.log(this.myDate.toJSON());
    // this.timeService.setTimer('dfgdgdfd');
    // this.timeService.setActive(false);
    this.timeService.getTime().subscribe((time: any) => {
      this.timer = time;
      this.active = time.active;
    });
    // this.timer = this.timeService.getTime();
  }
  onsubmit() {
    if (this.timerForm.invalid) {
      alert('في حاجة غلط');
      window.location.reload();
    }
    const date = this.timerForm.get('date').value.toJSON();
    const time = this.timerForm.get('time').value.toString();
    const timearr = date.split('');
    const timearrs = timearr.splice(0, 11);
    timearrs[9] = Number(timearrs[9]) + 1;
    this.timeService.setDateTime(timearrs.join('') + time);
    alert('كده تمام');
    window.location.reload();
  }

  public setCharAt(str, index, chr) {
    if (index > str.length - 1) {
      return str;
    }
    return str(0, index) + chr + str(index + chr.length);
    // return str.substring(0, index) + chr + str.substring(index + 1);
  }
}
