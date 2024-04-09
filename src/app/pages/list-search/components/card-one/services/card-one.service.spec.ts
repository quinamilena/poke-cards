/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CardOneService } from './card-one.service';

describe('Service: CardOne', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardOneService]
    });
  });

  it('should ...', inject([CardOneService], (service: CardOneService) => {
    expect(service).toBeTruthy();
  }));
});
