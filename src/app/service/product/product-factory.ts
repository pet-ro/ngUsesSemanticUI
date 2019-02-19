import { Product } from '../../model/type/Product';

/*
 *  The ProductFactory adapts backend data
 *  to the dataformat given in 
 *  `model/type/product`.
 * 
 *  Currently no adaptation are done here.
 * 
 *  Example for adaptations are given in related classes
 *  like ProductBookFactory, which returns `ProductBook`
 *  which is a subclass of `Product`
 */ 
export class ProductFactory {
    
    static empty(): Product {
      return new Product('','');
    }

    static fromObject( rawProduct: any): Product {
      // Here we just forward the `rawProduct`
      return new Product(
          rawProduct.key,
          rawProduct.title
      );
    }
}
