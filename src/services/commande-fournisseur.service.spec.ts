import { TestBed } from '@angular/core/testing';

import { CommandeFournisseurService } from './commande-fournisseur.service';

describe('CommandeFournisseurService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommandeFournisseurService = TestBed.get(CommandeFournisseurService);
    expect(service).toBeTruthy();
  });
});
