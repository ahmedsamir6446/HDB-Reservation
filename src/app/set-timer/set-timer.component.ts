import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { throwMatDialogContentAlreadyAttachedError } from '@angular/material';

@Component({
  selector: 'app-set-timer',
  templateUrl: './set-timer.component.html',
  styleUrls: ['./set-timer.component.scss'],
})
export class SetTimerComponent implements OnInit {
  public timerForm: FormGroup;
  constructor(protected fb: FormBuilder) {
    this.timerForm = this.fb.group({
      date: ['2020-08-31T20:57:48.121052+02:00'],
      time: ['2020-08-31T20:57:48.121052+02:00'],
    });
  }

  ngOnInit() {}
  onsubmit() {
    console.log(this.timerForm.value);
  }
}
