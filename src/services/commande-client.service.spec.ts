import { TestBed } from '@angular/core/testing';

import { CommandeClientService } from './commande-client.service';

describe('CommandeClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommandeClientService = TestBed.get(CommandeClientService);
    expect(service).toBeTruthy();
  });
});
