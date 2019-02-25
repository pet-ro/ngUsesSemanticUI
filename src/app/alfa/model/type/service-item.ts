
// specific to ProductBook
import { Thumbnail} from './thumbnail';
export { Thumbnail} from './thumbnail';

export class ServiceItem {
  constructor(
     public id: string,   
     public title: string,  
     public shortDescriptions: string[], 
     public featured: boolean,
     public description?: string[],
     public thumbnails?: Thumbnail[],
  ) { }
}
