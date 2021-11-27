import { TestBed } from '@angular/core/testing';

import { ProduitservService } from './produitserv.service';

describe('ProduitservService', () => {
  let service: ProduitservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProduitservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
