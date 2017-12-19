import { TestBed, inject } from '@angular/core/testing';

import { AtlasApiService } from './atlas-api.service';

describe('AtlasApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AtlasApiService]
    });
  });

  it('should be created', inject([AtlasApiService], (service: AtlasApiService) => {
    expect(service).toBeTruthy();
  }));
});
