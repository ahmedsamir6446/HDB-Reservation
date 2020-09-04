import { UsersAuthService } from './../users-auth.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap, debounceTime, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { TimeService } from '../time.service';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css'],
})
export class ReserveComponent implements OnInit {
  public landId: number;
  public timer;
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
    this.timeService.getTime().subscribe(timer => {
      this.timer = timer;
    });
    this.land = this.route.params.pipe(
      debounceTime(300),
      switchMap((params) =>
        this.auth.lands.filter((land) => land.id === +params['id'])
      )
    );
  }
}
