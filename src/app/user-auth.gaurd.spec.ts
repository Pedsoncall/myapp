import { TestBed } from '@angular/core/testing';

import { UserAuthGaurd } from './user-auth.gaurd';

describe('UserAuthGuard', () => {
  let guard: UserAuthGaurd;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserAuthGaurd);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
