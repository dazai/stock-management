import { TestBed } from '@angular/core/testing';

import { LigneCommandeClientService } from './ligne-commande-client.service';

describe('LigneCommandeClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LigneCommandeClientService = TestBed.get(LigneCommandeClientService);
    expect(service).toBeTruthy();
  });
});
