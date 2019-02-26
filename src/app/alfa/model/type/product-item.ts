
// specific to ProductBook
import { Thumbnail} from './thumbnail';
export { Thumbnail} from './thumbnail';

export class ProductItem {
  constructor(
     public id: string,   
     public title: string,  
     public shortDescriptions: string[],
     public inStock?: string,
     public featured?: boolean,
     public descriptions?: string[],
     public priceInEuro?: string,
     public thumbnails?: Thumbnail[],
  ) { }
}
