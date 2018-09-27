import { TestBed } from '@angular/core/testing';

import { DevExtremeServiceService } from './dev-extreme-service.service';

describe('DevExtremeServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DevExtremeServiceService = TestBed.get(DevExtremeServiceService);
    expect(service).toBeTruthy();
  });
});
