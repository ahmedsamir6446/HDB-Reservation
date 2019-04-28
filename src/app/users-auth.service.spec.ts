import { TestBed } from '@angular/core/testing';

import { UsersAuthService } from './users-auth.service';

describe('UsersAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsersAuthService = TestBed.get(UsersAuthService);
    expect(service).toBeTruthy();
  });
});
