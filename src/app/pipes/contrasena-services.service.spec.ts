import { TestBed } from '@angular/core/testing';

import { ContrasenaServicesService } from './contrasena-services.service';

describe('ContrasenaServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContrasenaServicesService = TestBed.get(ContrasenaServicesService);
    expect(service).toBeTruthy();
  });
});
