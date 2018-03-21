import { TestBed, inject } from '@angular/core/testing';

import { EmployeesDbService } from './employees-db.service';

describe('EmployeesDbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeesDbService]
    });
  });

  it('should be created', inject([EmployeesDbService], (service: EmployeesDbService) => {
    expect(service).toBeTruthy();
  }));
});
