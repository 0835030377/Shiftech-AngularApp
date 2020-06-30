import { TestBed } from '@angular/core/testing';

import { AddCreditcardService } from './add-creditcard.service';

describe('AddCreditcardService', () => {
  let service: AddCreditcardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddCreditcardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
