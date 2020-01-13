import { TestBed } from '@angular/core/testing';

import { LigneVenteService } from './ligne-vente.service';

describe('LigneVenteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LigneVenteService = TestBed.get(LigneVenteService);
    expect(service).toBeTruthy();
  });
});
