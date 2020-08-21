import { UsersAuthService } from './../users-auth.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap, debounceTime } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { _getComponentHostLElementNode } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css'],
})
export class ReserveComponent implements OnInit {
  public landId: number;
  // public land: Observable<any>;
  public land;
  localStorageAlice = localStorage;
  constructor(
    private route: ActivatedRoute,
    protected auth: UsersAuthService,
    protected cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.land = this.route.params.pipe(
      debounceTime(300),
      switchMap((params) =>
        this.auth.lands.filter((land) => land.id === +params['id'])
      )
    );
  }
}
