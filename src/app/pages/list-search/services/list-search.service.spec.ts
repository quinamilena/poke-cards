/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ListSearchService } from './list-search.service';

describe('Service: ListSearch', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListSearchService]
    });
  });

  it('should ...', inject([ListSearchService], (service: ListSearchService) => {
    expect(service).toBeTruthy();
  }));
});
