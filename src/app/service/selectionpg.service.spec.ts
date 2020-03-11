import { TestBed } from '@angular/core/testing';

import { SelectionpgService } from './selectionpg.service';

describe('SelectionpgService', () => {
  let service: SelectionpgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectionpgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
