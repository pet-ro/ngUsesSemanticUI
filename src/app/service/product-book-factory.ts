// The factory implements 
// import { IProductFactory} from './iproduct-factory'
// Deprecated, because of  [TypeScript issue #14600](https://github.com/Microsoft/TypeScript/issues/14600)

import { ProductBook } from '../model/type/product-book';
import { from } from 'rxjs';

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
export class ProductBookFactory {
    
    static empty(): ProductBook {
      return new ProductBook(
             '',  // key
             '',  // title,
            [''], // authors
            new Date(),  // published
            ``,   // subtitle
            0,    // rating
            [ {url: '', title: ''}], // tumbnails
             '',   // description
              );
    }

    static fromObject( rawProductBook: any): ProductBook {
      // Here we just forward the `rawProduct`
      return new ProductBook(
          rawProductBook.key,
          rawProductBook.title,
          rawProductBook.authors,
          typeof(rawProductBook.published) === `string` 
              ? new Date( rawProductBook.published)
              : rawProductBook.published,
          rawProductBook.subtitle,
          rawProductBook.rating,
          rawProductBook.thumbnails,
          rawProductBook.description
      )
    }
}