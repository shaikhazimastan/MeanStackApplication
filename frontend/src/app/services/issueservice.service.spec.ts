import { TestBed, inject } from '@angular/core/testing';

import { IssueserviceService } from './issueservice.service';

describe('IssueserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IssueserviceService]
    });
  });

  it('should be created', inject([IssueserviceService], (service: IssueserviceService) => {
    expect(service).toBeTruthy();
  }));
});
