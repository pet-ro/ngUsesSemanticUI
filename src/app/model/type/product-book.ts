// use interface ex
import { Product } from './product';


// specific to ProductBook
import { Thumbnail} from './thumbnail';
export { Thumbnail} from './thumbnail';

export class ProductBook {
  constructor(
     public key: string,   
     public title: string,  
     public authors: string[],
     public published: Date,
     public subtitle?: string,
     public rating?: number,
     public thumbnails?: Thumbnail[],
     public description?: string
  ) { }
}
