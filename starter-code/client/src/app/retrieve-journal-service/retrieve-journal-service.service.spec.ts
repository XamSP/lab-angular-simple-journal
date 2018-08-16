import { TestBed, inject } from '@angular/core/testing';

import { RetrieveJournalService } from './retrieve-journal-service.service';

describe('RetrieveJournalServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RetrieveJournalService]
    });
  });

  it('should be created', inject([RetrieveJournalService], (service: RetrieveJournalService) => {
    expect(service).toBeTruthy();
  }));
});
