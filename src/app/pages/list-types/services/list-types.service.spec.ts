/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ListTypesService } from './list-types.service';

describe('Service: ListTypes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListTypesService]
    });
  });

  it('should ...', inject([ListTypesService], (service: ListTypesService) => {
    expect(service).toBeTruthy();
  }));
});
