import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { TimeService } from '../time.service';

@Component({
  selector: 'app-set-timer',
  templateUrl: './set-timer.component.html',
  styleUrls: ['./set-timer.component.scss'],
})
export class SetTimerComponent implements OnInit {
  public timerForm: FormGroup;
  constructor(protected fb: FormBuilder, protected timeService: TimeService) {
    this.timerForm = this.fb.group({
      date: [''],
      time: [''],
    });
  }

  ngOnInit() {
    this.timeService.getCurrrentTime().subscribe(time => {
      console.log(time);
    });
    this.timeService.getTime().subscribe(time => {
      console.log(time);
    });
  }
  onsubmit() {
    console.log(this.timerForm.value);
  }
}
