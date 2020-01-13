import { TestBed } from '@angular/core/testing';

import { MvtStockService } from './mvt-stock.service';

describe('MvtStockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MvtStockService = TestBed.get(MvtStockService);
    expect(service).toBeTruthy();
  });
});
