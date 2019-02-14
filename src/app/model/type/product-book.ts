// use interface ex
import { Product } from './product';


// specific to ProductBook
import { Thumbnail} from './thumbnail';
export { Thumbnail} from './thumbnail';


// declare interface to write Object Literal Notation typesafe
export interface ProductBook extends Product { 
     // isbn: string,   // skipped here, because as `key` in Product
     // title: string,  // skipped here, because as `title` in Product
     authors: string[],
     published: Date,
     subtitle?: string,
     rating?: number,
     thumbnails?: Thumbnail[],
     description?: string
}

// declare class related to the above interface
export var ProductBook: { 
    //  constructor function object.
    new(key: string,  // use isbn as  key
        title: string,
        authors: string[],
        published: Date,
        subtitle?: string,
        rating?: number,
        thumbnails?: Thumbnail[],
        description?: string): ProductBook;    
}