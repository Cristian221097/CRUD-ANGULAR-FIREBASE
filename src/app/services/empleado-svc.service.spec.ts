import { TestBed } from '@angular/core/testing';

import { EmpleadoSvcService } from './empleado-svc.service';

describe('EmpleadoSvcService', () => {
  let service: EmpleadoSvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpleadoSvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
