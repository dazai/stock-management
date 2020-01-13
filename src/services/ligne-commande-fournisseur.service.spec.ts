import { TestBed } from '@angular/core/testing';

import { LigneCommandeFournisseurService } from './ligne-commande-fournisseur.service';

describe('LigneCommandeFournisseurService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LigneCommandeFournisseurService = TestBed.get(LigneCommandeFournisseurService);
    expect(service).toBeTruthy();
  });
});
