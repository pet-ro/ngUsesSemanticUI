import { ProductBookFactory } from './product-book-factory';

describe('ProductBookFactory', () => {
  it('should create an instance', () => {
    expect(new ProductBookFactory()).toBeTruthy();
  });
});
