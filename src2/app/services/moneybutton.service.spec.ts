import { TestBed } from '@angular/core/testing';

import { MoneybuttonService } from './moneybutton.service';

describe('MoneybuttonService', () => {
  let service: MoneybuttonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoneybuttonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
