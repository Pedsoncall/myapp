import { TestBed } from '@angular/core/testing';

import { AdminAuthGaurd } from './admin-auth.gaurd';

describe('AdminAuthGuard', () => {
  let guard: AdminAuthGaurd;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminAuthGaurd);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
