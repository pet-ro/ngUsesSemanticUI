
import { ProductItem } from '../type/product-item';
import { from } from 'rxjs';

/*
 *  The Factory method `fromObject`
 *  
 *     - adapts backend data
 *       to the dataformat given in 
 *       `model/type/product-item`.
 * 
 *     - used by its service.
 *   
 *   
 * 
 *  Currently no adaptation are done here.
 * 
 *  ***  AND  ***
 * 
 *  The Factory provides `empty()`method to 
 *  init the field of an Angular form.
 */ 

export class ProductItemFactory {


    static empty(): ProductItem  {
        return new ProductItem  (
                     '',  // id,
                     '',  // title,
                    [''], // shortDescriptions, 
                      '' ,// inStock
                    false,// featured 
                     [''],// descriptions 
                      '', // priceInEuro
 [ {url: '', title: ''}], // tumbnails
                );
      }
  
    static fromObject( raw: any): ProductItem  {
        // Here we just forward the `rawProduct`
        return   new ProductItem  (
          raw.id,  // id,
          raw.title,  // title,
          raw.shortDescriptions, // shortDescriptions, 
          raw.inStock ,// inStock
          raw.featured,// featured 
          raw.descriptions,// descriptions 
          raw.priceInEuro, // priceInEuro
          raw.thumbnails , // tumbnails
     );
      }
}
