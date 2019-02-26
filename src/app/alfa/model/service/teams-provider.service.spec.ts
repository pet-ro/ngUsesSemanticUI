import { TestBed } from '@angular/core/testing';

import { TeamProviderService } from './teams-provider.service';

describe('TeamProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeamProviderService = TestBed.get(TeamProviderService);
    expect(service).toBeTruthy();
  });
});
