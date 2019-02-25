
// specific to ProductBook
import { Thumbnail} from './thumbnail';
export { Thumbnail} from './thumbnail';

export class ProductItem {
  constructor(
     public id: string,   
     public title: string,  
     public shortDescriptions: string[],
     public inStock?: number,
     public featured: boolean,
     public description?: string[],
     public price?: number,
     public thumbnails?: Thumbnail[],
  ) { }
}
