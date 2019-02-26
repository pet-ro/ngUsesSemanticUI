import { TestBed } from '@angular/core/testing';

import { ProductItemProviderService } from './product-item-provider.service';

describe('ProductItemProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductItemProviderService = TestBed.get(ProductItemProviderService);
    expect(service).toBeTruthy();
  });
});
