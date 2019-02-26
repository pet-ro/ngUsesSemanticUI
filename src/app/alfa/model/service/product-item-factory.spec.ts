import { ProductItemFactory } from './product-item-factory';

describe('ProductItemFactory', () => {
  it('should create an instance', () => {
    expect(new ProductItemFactory()).toBeTruthy();
  });
});
