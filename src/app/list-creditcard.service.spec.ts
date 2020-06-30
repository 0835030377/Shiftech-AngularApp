import { TestBed } from '@angular/core/testing';

import { ListCreditcardService } from './list-creditcard.service';

describe('ListCreditcardService', () => {
  let service: ListCreditcardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListCreditcardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
